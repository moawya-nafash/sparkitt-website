import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sparkitt",
  description: "Learn about Sparkitt, the neuroscience-driven marketing agency. We combine psychology, neuroscience, and data to understand consumer behavior.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
