import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AceDesign Admin Dashboard",
  description: "Admin dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <head>
        {/* Primary SVG favicon (scalable) */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {/* PNG fallback for older browsers / pinned tiles */}
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        {/* Traditional ICO fallback (very old browsers) */}
        <link rel="icon" href="/favicon.ico" />
        {/* Safari pinned tab (macOS) — provide a monochrome SVG and a color */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#269AF2" />
        {/* iOS / Android home screen */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning={true}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
