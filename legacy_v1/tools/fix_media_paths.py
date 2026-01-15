#!/usr/bin/env python3
import os
import re
from pathlib import Path

def update_paths_in_file(file_path):
    """Update all media paths in a file to use /sparkitt-website/ prefix"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern for src attributes without /sparkitt-website/ prefix
    pattern = r'src=(["\'])((?!http|data:|\/sparkitt-website)[^"\']+\.(png|jpg|jpeg|gif|webp|mp4|webm|svg))(["\'])'
    
    def fix_path(match):
        quote = match.group(1)  # Keep the original quote style
        path = match.group(2)   # The path itself
        # Remove any ../ or ./ and clean up paths
        path = re.sub(r'^\.\.?/', '', path)
        # Add sparkitt-website prefix
        return f'src={quote}/sparkitt-website/{path}{quote}'
    
    # Replace paths in src attributes
    new_content = re.sub(pattern, fix_path, content)
    
    # Also fix data-thumb and data-images attributes
    new_content = re.sub(
        r'(data-thumb|data-images)=(["\'])((?!http|data:|\/sparkitt-website)[^"\']+)(["\'])',
        lambda m: f'{m.group(1)}={m.group(2)}/sparkitt-website/{re.sub(r"^\.\.?/", "", m.group(3))}{m.group(4)}',
        new_content
    )
    
    # Fix logoPath in JavaScript
    js_pattern = r'(const\s+logoPath\s*=\s*isInPagesFolder\s*\?\s*)["\'][^"\']+["\'](\s*:\s*)["\'][^"\']+["\']'
    js_replacement = r'\1"/sparkitt-website/media/images/logo.png"\2"/sparkitt-website/media/images/logo.png"'
    new_content = re.sub(js_pattern, js_replacement, new_content)
    
    # Write back only if content changed
    if new_content != content:
        print(f"Updating {file_path}")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

def main():
    # Get repo root
    repo_root = Path(__file__).resolve().parents[1]
    
    # Files to process
    extensions = {'.html', '.htm', '.js', '.css'}
    
    # Process each file
    for ext in extensions:
        for file_path in repo_root.rglob(f'*{ext}'):
            if not any(part.startswith('.') for part in file_path.parts):  # Skip hidden directories
                update_paths_in_file(file_path)

if __name__ == '__main__':
    main()