import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crystal-edge-digital.com"),
  title: "Crystal Edge Digital | Cloud, AI & Digital Solutions",
  description:
    "Cloud consulting, AI integration, and digital solutions that give your business the edge. Move faster. Build smarter.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Crystal Edge Digital | Cloud, AI & Digital Solutions",
    description:
      "Cloud consulting, AI integration, and digital solutions that give your business the edge. Move faster. Build smarter.",
    url: "https://www.crystal-edge-digital.com",
    siteName: "Crystal Edge Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Edge Digital | Cloud, AI & Digital Solutions",
    description:
      "Cloud consulting, AI integration, and digital solutions that give your business the edge. Move faster. Build smarter.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
