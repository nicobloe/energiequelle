import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Breadcrumb />
        <div className="bg-[#2aaa8a] text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">{children}</div>
      </main>
      <Footer />
    </>
  )
}
