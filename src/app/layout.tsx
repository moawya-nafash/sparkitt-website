import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Background3D from "@/components/layout/Background3D";
import CustomCursor from "@/components/layout/CustomCursor";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkitt.info"),
  title: {
    default: "Sparkitt - Neuroscience Driven Marketing Technology",
    template: "%s | Sparkitt"
  },
  description: "Understand your customers with 95% accuracy using Sparkitt's neuroscience-backed marketing technology. Transform data into emotional intelligence.",
  keywords: ["Neuroscience Marketing", "Customer Behavior Analysis", "AI Marketing Tools", "Emotional Intelligence Data", "Sparkitt", "Next.js Agency"],
  authors: [{ name: "Sparkitt Team" }],
  creator: "Sparkitt",
  publisher: "Sparkitt",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sparkitt.info",
    title: "Sparkitt - The Future of Customer Understanding",
    description: "Combine neuroscience and technology to predict customer behavior with 95% accuracy.",
    siteName: "Sparkitt",
    images: [
      {
        url: "/media/images/logo.webp", // Improve with a dedicated OG image later
        width: 1200,
        height: 630,
        alt: "Sparkitt - Neuroscience Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparkitt - Neuroscience Driven Marketing",
    description: "Predict customer behavior with 95% accuracy.",
    images: ["/media/images/logo.webp"], // Improve with dedicated twitter image
  },
  icons: {
    icon: "/media/images/logo.webp",
    shortcut: "/media/images/logo.webp",
    apple: "/media/images/logo.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sparkitt Insight Engine",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Cloud",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Neuroscience-backed marketing technology for predicting customer behavior with 95% accuracy.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "120"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sparkitt",
    "logo": "https://sparkitt.info/media/images/logo.webp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(inter.variable, "font-sans antialiased bg-black text-white overflow-x-hidden w-full max-w-[100vw]")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <Background3D />
          <CustomCursor />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
