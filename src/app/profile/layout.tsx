import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile | Sparkitt",
  description: "View Sparkitt's neuroscience-driven marketing technology profile, showcasing our innovative approach to predicting customer behavior.",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
