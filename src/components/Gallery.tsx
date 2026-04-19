"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const IMAGE_COUNT = 26;
const IMAGES = Array.from({ length: IMAGE_COUNT }, (_, i) => ({
    id: i + 1,
    src: `/gallery/photo(${i + 1}).webp`,
    alt: `Sparkitt Culture Photo ${i + 1}`
}));

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const selectedImage = IMAGES.find(img => img.id === selectedId);

    function handleNext(e: React.MouseEvent) {
        e.stopPropagation();
        if (selectedId === null) return;
        setSelectedId(selectedId === IMAGE_COUNT ? 1 : selectedId + 1);
    }

    function handlePrev(e: React.MouseEvent) {
        e.stopPropagation();
        if (selectedId === null) return;
        setSelectedId(selectedId === 1 ? IMAGE_COUNT : selectedId - 1);
    }

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1">
                {IMAGES.map((image, index) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative aspect-square overflow-hidden cursor-pointer group bg-white/5"
                        onClick={() => setSelectedId(image.id)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={index < 4}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="text-white w-8 h-8" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {mounted && createPortal(
                <AnimatePresence>
                    {selectedId !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                            onClick={() => setSelectedId(null)}
                        >
                            <button
                                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]"
                                onClick={() => setSelectedId(null)}
                            >
                                <X size={24} />
                            </button>

                            <button
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]"
                                onClick={handlePrev}
                            >
                                <ChevronLeft size={32} />
                            </button>

                            <button
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-[101]"
                                onClick={handleNext}
                            >
                                <ChevronRight size={32} />
                            </button>

                            <motion.div
                                key={selectedId}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative w-auto h-auto max-w-[95vw] max-h-[90vh] overflow-hidden rounded-lg shadow-2xl flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {selectedImage && (
                                    <div className="relative">
                                        <Image
                                            src={selectedImage.src}
                                            alt={selectedImage.alt}
                                            width={1920}
                                            height={1080}
                                            className="object-contain max-h-[90vh] w-auto h-auto"
                                            sizes="95vw"
                                            priority
                                        />
                                    </div>
                                )}
                            </motion.div>

                            <div className="absolute bottom-6 left-0 right-0 text-center text-gray-400 text-sm z-[101]">
                                {selectedId} / {IMAGE_COUNT}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
