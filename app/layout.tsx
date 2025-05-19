import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"

// Optimiertes Font-Loading mit display: swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "energiequelle | Zinzino Partner",
  description: "Gesund mit Nahrungsmittelergänzung - TEST IT. FEEL IT. LIVE IT",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        {/* Preload kritische Assets */}
        <link rel="preload" href="/images/energiequelle-logo-new.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/zinzino-products-hero.png" as="image" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
