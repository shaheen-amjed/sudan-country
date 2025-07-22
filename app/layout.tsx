import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// start
export const metadata: Metadata = {
  title: "Sudan Redefined | The Sudan You Never Knew",
  description:
    "Discover the hidden history, culture, and legacy of Sudan — the land of ancient kingdoms, forgotten pyramids, and untold African power. This website challenges global misconceptions and reclaims the truth about Sudan.",
  keywords: [
    "Sudan",
    "Sudan history",
    "Nubia",
    "Kush",
    "Meroë",
    "Makuria",
    "Sudanese culture",
    "African civilization",
    "African history",
    "black pharaohs",
    "Sudan pyramids",
    "untold African stories",
    "Sudan identity",
    "Redefining Sudan",
    "Sudanese heritage",
    "modern Sudan",
    "Africa rich history",
    "black excellence",
    "Ancient Africa",
    "Hidden Africa",
    "Lost African kingdoms"
  ],
  authors: [{ name: "Shaheen Amjed", url: "https://github.com/shaheen-amjed" }],
  creator: "Shaheen Amjed",
  openGraph: {
    title: "Sudan Redefined | The Sudan You Never Knew",
    description:
      "More pyramids than Egypt. Kingdoms older than maps. Cultures deeper than time. This is Sudan — redefined by truth, not stereotypes.",
    url: "https://yourdomain.com", // ✏️ Replace with your actual domain
    siteName: "Sudan Redefined",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sudan-country.vercel.app/sudan-planet.jpg",
        width: 1200,
        height: 630,
        alt: "Sudan Redefined – The Sudan You Never Knew",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

// end


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
