import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: {
    default: "ConnectED - Stories That Connect Us",
    template: "%s | ConnectED",
  },
  description:
    "Humanizing the world through authentic storytelling. Stories, voices, and perspectives from changemakers across Indonesia and beyond.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#22d3ee",
          colorBackground: "#18181b",
          colorForeground: "#fafafa",
          colorMutedForeground: "#a1a1aa",
          colorInput: "#09090b",
          colorInputForeground: "#fafafa",
          colorPrimaryForeground: "#09090b",
        },
      }}
    >
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="min-h-screen flex flex-col bg-[#09090b] text-zinc-50 antialiased">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
