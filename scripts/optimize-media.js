const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const MEDIA_DIR = path.join(__dirname, '../public/media');

// Recursive function to get all files
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

async function optimizeImages() {
    console.log('🚀 Starting Image Optimization...');

    if (!fs.existsSync(MEDIA_DIR)) {
        console.error('❌ Media directory not found:', MEDIA_DIR);
        return;
    }

    const files = getAllFiles(MEDIA_DIR);
    let convertedCount = 0;

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();

        // Process only unsupported formats that need conversion to AVIF
        // (Skipping existing AVIFs and SVGs)
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            const outputFilePath = file.replace(ext, '.avif');

            // Skip if AVIF already exists
            if (fs.existsSync(outputFilePath)) {
                // console.log(`⏩ Skipping (AVIF exists): ${path.basename(file)}`);
                continue;
            }

            try {
                await sharp(file)
                    .avif({ quality: 60 }) // Good balance of size/quality
                    .toFile(outputFilePath);

                console.log(`✅ Converted: ${path.basename(file)} -> AVIF`);
                convertedCount++;
            } catch (err) {
                console.error(`❌ Error converting ${path.basename(file)}:`, err.message);
            }
        }
    }

    console.log(`\n✨ Optimization Complete! Converted ${convertedCount} images to AVIF.`);
    console.log(`ℹ️  Next.js will automatically serve these optimal formats when using the <Image> component.`);
}

optimizeImages();
