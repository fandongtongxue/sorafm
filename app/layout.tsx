import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s, 用Sora制作视频",
    default: "Sora AI视频制作",
  },
  description: "Sora是用来制作视频的",
  keywords:
    "sora,sora fm,sora ai,openai sora,video ai,ai video,sora video,ai video generator,text to video,sora ai video,sora ai video generator, 范小兵",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" richColors />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
