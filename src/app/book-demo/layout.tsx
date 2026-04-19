import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | Sparkitt",
  description: "Schedule a demonstration of Sparkitt's neuroscience-driven marketing platform. Discover how our technology predicts customer behavior with 95% accuracy.",
};

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
