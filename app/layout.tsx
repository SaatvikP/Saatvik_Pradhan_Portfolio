import type React from "react"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AdvancedParticles from "@/components/advanced-particles"
import type { Metadata } from "next"
import PageTransition from "@/components/page-transition"
import LoadingScreen from "@/components/loading-screen"
import ScrollToTop from "@/components/scroll-to-top"
import CursorTrail from "@/components/cursor-trail"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Saatvik Pradhan | AI/ML Engineer & Software Developer",
  description:
    "Computer Science student at Schreyer Honors College, Penn State University. Specializing in AI, Machine Learning, and Software Development.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saatvik-pradhan.com",
    title: "Saatvik Pradhan | AI/ML Engineer & Software Developer",
    description:
      "Computer Science student at Schreyer Honors College, Penn State University. Specializing in AI, Machine Learning, and Software Development.",
    siteName: "Saatvik Pradhan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saatvik Pradhan | AI/ML Engineer & Software Developer",
    description:
      "Computer Science student at Schreyer Honors College, Penn State University. Specializing in AI, Machine Learning, and Software Development.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AdvancedParticles />
          <LoadingScreen />
          <PageTransition>{children}</PageTransition>
          <ScrollToTop />
          <CursorTrail />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'