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
        <div className="bg-gray-50">
          <Breadcrumb />
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
              {description && <p className="text-lg text-gray-600 mt-4 max-w-3xl">{description}</p>}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 md:py-12">{children}</div>
      </main>
      <Footer />
    </>
  )
}
