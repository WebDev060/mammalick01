import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReCaptchaProvider from "@/components/ReCaptchaProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MammaLick - Premium Himalayan Pink Lick Salt for Livestock USA",
    template: "%s | MammaLick - Premium Lick Salt for Animals"
  },
  description: "Buy premium Himalayan pink lick salt for horses, cattle, goats & livestock. Natural 84 mineral supplement. Free shipping on bulk orders. Made in USA distribution.",
  keywords: [
    "himalayan lick salt",
    "pink lick salt",
    "livestock salt mineral",
    "horse lick salt",
    "cattle salt block",
    "animal mineral supplement",
    "lick salt for sale USA",
    "natural livestock minerals",
    "farm animal salt",
    "himalayan pink salt USA"
  ],
  authors: [{ name: "MammaLick" }],
  creator: "MammaLick",
  publisher: "MammaLick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://purelick.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://purelick.vercel.app",
    siteName: "MammaLick",
    title: "MammaLick - Premium Himalayan Pink Lick Salt for Livestock USA",
    description: "Premium Himalayan pink lick salt for horses, cattle, goats & livestock. 84 essential minerals. Free shipping on bulk orders.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MammaLick Himalayan Pink Lick Salt for Livestock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MammaLick - Premium Himalayan Pink Lick Salt for Livestock USA",
    description: "Premium Himalayan pink lick salt for horses, cattle, goats & livestock. 84 essential minerals. Free shipping on bulk orders.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ReCaptchaProvider>
          {children}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
