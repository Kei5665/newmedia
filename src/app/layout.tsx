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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "RIDE JOB Media - ドライバー業界の魅力を発見",
    template: "%s | RIDE JOB Media",
  },
  description:
    "RIDE JOB Mediaは、タクシー業界への転職を考えている方やライドシェアに興味がある方に向けて、業界の最新情報や働き方、収入、制度の変化をご紹介するメディアです。",
  openGraph: {
    title: "RIDE JOB Media - ドライバー業界の魅力を発見",
    description:
      "RIDE JOB Mediaは、タクシー業界への転職を考えている方やライドシェアに興味がある方に向けて、業界の最新情報や働き方、収入、制度の変化をご紹介するメディアです。",
    url: "https://ridejob.jp/",
    siteName: "RIDE JOB Media",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/media/OGP.png",
        width: 1200,
        height: 630,
        alt: "RIDE JOB Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIDE JOB Media - ドライバー業界の魅力を発見",
    description:
      "RIDE JOB Mediaは、タクシー業界への転職を考えている方やライドシェアに興味がある方に向けて、業界の最新情報や働き方、収入、制度の変化をご紹介するメディアです。",
    images: [
      {
        url: "/media/OGP.png",
        alt: "RIDE JOB Media",
      },
    ],
  },
  icons: {
    icon: "/media/favicon.png",
    shortcut: "/media/favicon.png",
    apple: "/media/favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
