"use client";

import dynamic from "next/dynamic";

const ParticleNetwork = dynamic(() => import("@/components/3d/ParticleNetwork"), {
    ssr: false,
    loading: () => null
});

export default function Background3D() {
    return <ParticleNetwork />;
}
