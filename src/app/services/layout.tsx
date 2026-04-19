import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Sparkitt",
  description: "Explore Sparkitt's comprehensive neuroscience-driven marketing services, including Neuromarketing, Research, and Strategic planning.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
