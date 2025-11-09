#!/usr/bin/env python3
import os
import shutil
from pathlib import Path

# Dictionary of old names to new names
RENAMES = {
    'LOGO.PNG': 'logo.png',
    'Lim Lab Internal Research thumbnail.PNG': 'limlab.png',
    'Malak Al Tawouk thumbnail.PNG': 'malak-al-tawouk.png',
    'CHEESE ON TOP thumbnail.PNG': 'cheese-on-top.png',
    'Burgerizzz thumbnail.PNG': 'burgerizzz.png',
    'Exit to Nature thumbnail.PNG': 'exit-to-nature.png',
    'Spinneys thumbnail.PNG': 'spinneys.png',
    'Saiid Kobeisy thumbnail.PNG': 'saiid-kobeisy.png'
}

def normalize_filename(filename):
    """Convert spaces to hyphens and make lowercase"""
    return filename.lower().replace(' ', '-')

def main():
    repo_root = Path(__file__).resolve().parents[1]
    
    # Create media/images if it doesn't exist
    images_dir = repo_root / 'media' / 'images'
    images_dir.mkdir(parents=True, exist_ok=True)
    
    # Create thumbnails directory if it doesn't exist
    thumbnails_dir = repo_root / 'thumbnails'
    thumbnails_dir.mkdir(parents=True, exist_ok=True)

    # Process each file
    for old_name, new_name in RENAMES.items():
        # Look for the file in various locations
        possible_locations = [
            repo_root,
            images_dir,
            repo_root / 'media' / 'images' / 'Logos with colors',
            thumbnails_dir
        ]
        
        found = False
        for location in possible_locations:
            old_path = location / old_name
            if old_path.exists() or location.glob(f"{old_name.split('.')[0]}.*"):
                # Find actual file regardless of extension
                for existing in location.glob(f"{old_name.split('.')[0]}.*"):
                    new_path = thumbnails_dir / new_name
                    print(f"Moving and renaming: {existing} → {new_path}")
                    shutil.copy2(existing, new_path)
                    found = True
                    break
            if found:
                break
        
        if not found:
            print(f"Warning: Could not find {old_name} in any expected location")

if __name__ == '__main__':
    main()