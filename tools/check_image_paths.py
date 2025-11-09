#!/usr/bin/env python3
"""
Scan repo for image references (src="...", url(...), data-thumb or data-images) and report references
that don't match actual files with exact case (important for GitHub Pages).

Usage:
  python tools/check_image_paths.py

It prints mismatches and suggested exact filenames.
"""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
PATTERNS = [
    re.compile(r"src=[\"']([^\"']+)[\"']", re.IGNORECASE),
    re.compile(r"data-thumb=[\"']([^\"']+)[\"']", re.IGNORECASE),
    re.compile(r"data-images=[\"']([^\"']+)[\"']", re.IGNORECASE),
    re.compile(r"url\(([\"']?)([^)\"']+)\1\)", re.IGNORECASE),
]
FILE_GLOBS = ['**/*.html', '**/*.htm', '**/*.css', '**/*.js']


def path_exists_case_sensitive(base: Path, rel: str) -> bool:
    """Check whether base/rel exists with exact case for each path component."""
    target = (base / rel).resolve()
    try:
        # Walk components from base to target
        p = base.resolve()
        rel_path = Path(rel)
        for part in rel_path.parts:
            # Handle .. and absolute paths
            if part in ('.', '..'):
                p = (p / part).resolve()
                continue
            entries = {e.name: e for e in p.iterdir()}
            if part not in entries:
                return False
            p = entries[part]
        return p.exists()
    except Exception:
        return False


def find_references():
    refs = []
    for glob in FILE_GLOBS:
        for f in ROOT.glob(glob):
            if f.is_file():
                text = f.read_text(encoding='utf-8', errors='ignore')
                for pat in PATTERNS:
                    for m in pat.finditer(text):
                        rel = m.group(1).strip()
                        # skip external URLs and template placeholders
                        if rel.startswith('http://') or rel.startswith('https://') or rel.startswith('data:'):
                            continue
                        if '${' in rel:
                            # template variable, skip - can't resolve at static scan
                            continue
                        refs.append((f, rel))
    return refs


def normalize_path(from_file: Path, ref: str) -> str:
    # Resolve relative to the from_file parent
    if ref.startswith('/'):
        # absolute path relative to repo root
        return str((ROOT / ref.lstrip('/')).resolve())
    else:
        return str((from_file.parent / ref).resolve())


def main():
    refs = find_references()
    problems = []
    for src_file, ref in refs:
        # handle comma-separated lists (e.g., data-images="path1, path2")
        parts = [p.strip() for p in ref.split(',') if p.strip()]
        for part in parts:
            # ignore query strings or hashes
            ref_path = re.sub(r'[?#].*$', '', part)
            resolved = normalize_path(src_file, ref_path)
            # compute path relative to repo root for reporting
            try:
                rel_to_root = Path(resolved).relative_to(ROOT)
            except Exception:
                rel_to_root = Path(resolved)
            exists_exact = path_exists_case_sensitive(src_file.parent, ref_path)
            if not exists_exact:
                problems.append((src_file, ref_path, rel_to_root))

    if not problems:
        print('No case-sensitive path issues detected. Good news!')
        return 0

    print('Found potential case-sensitive mismatches (these may break on GitHub Pages):\n')
    for src_file, ref, rel in problems:
        print(f'File: {src_file.relative_to(ROOT)}')
        print(f'  Reference: {ref}')
        # Suggest candidate files under the same directory
        ref_path = re.sub(r'[?#].*$', '', ref)
        parent = (src_file.parent / ref_path).parent
        if parent.exists():
            candidates = [p.name for p in parent.iterdir() if p.is_file()]
            print(f'  Directory listing ({parent.relative_to(ROOT)}):')
            for c in candidates:
                print(f'    - {c}')
        else:
            print(f'  Directory does not exist in repo: {parent.relative_to(ROOT) if parent.exists() else parent}')
        print('')

    print('\nQuick suggestions:')
    print(' - Edit the HTML/CSS/JS file(s) to match the exact filename (case and spacing).')
    print(" - Or rename the files to a normalized convention (lowercase, hyphens instead of spaces) and update refs.")
    print('\nTo apply automated changes: consider writing a small tool that renames files and updates references. Test locally before committing to avoid breaking other paths.')
    return 1

if __name__ == '__main__':
    sys.exit(main())
