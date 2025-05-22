"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Lightbox from "./lightbox"

const products = [
  {
    id: 1,
    name: "BalanceOil+",
    description:
      "Omega-3 Nahrungsergänzungsmittel für ein ausgewogenes Verhältnis von Omega-6 und Omega-3. Unterstützt die normale Herzfunktion.",
    image: "/images/balanceoil-plus.png",
    link: "https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/omega-supplements/300000/",
  },
  {
    id: 2,
    name: "BalanceTest",
    description:
      "Heimtest zur Analyse deines Omega-6:3-Verhältnisses. Erhalte personalisierte Ergebnisse und Empfehlungen für deine optimale Gesundheit.",
    image: "/images/viva-plus.png",
    link: "https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/home-health-tests/309000/",
  },
  {
    id: 3,
    name: "ZinoBiotic+",
    description:
      "Ballaststoffmischung zur Unterstützung einer gesunden Darmfunktion und des Mikrobioms. Enthält fünf natürliche Ballaststoffquellen.",
    image: "/images/zinobiotic-plus.png",
    link: "https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/gut-health-supplements/301390/",
  },
  {
    id: 4,
    name: "Collagen Boozt",
    description:
      "Schöne Haut von innen. Flüssige Formulierung mit Kirschgeschmack, Meereskollagen und Hyaluronsäure zur Verbesserung der Hautstruktur.",
    image: "/images/collagen-boozt-new.png",
    link: "https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/skin-nutrition/302800/",
  },
]

interface ProductsProps {
  layout?: "grid" | "vertical"
}

export default function Products({ layout = "grid" }: ProductsProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState({ url: "", alt: "" })

  const openLightbox = (imageUrl: string, altText: string) => {
    setSelectedImage({ url: imageUrl, alt: altText })
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  // Bestimme die Grid-Klassen basierend auf dem Layout-Prop
  const gridClasses =
    layout === "vertical"
      ? "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"

  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="products" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section bg-gray-50 pt-8 md:pt-12">
        <h2 className="section-title">Unsere Produkte</h2>
        <p className="section-subtitle">
          Entdecken Sie die hochwertigen Nahrungsergänzungsmittel von Zinzino, die auf wissenschaftlicher Basis
          entwickelt wurden, um Ihre Gesundheit optimal zu unterstützen.
        </p>

        <div className={gridClasses}>
          {products.map((product) => (
            <div key={product.id} className="product-card flex flex-col h-full">
              <div className="bg-white p-6 flex items-center justify-center" style={{ minHeight: "280px" }}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => openLightbox(product.image, product.name)}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="max-w-full max-h-[250px] object-contain transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <span className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Vergrössern
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-card-content flex flex-col flex-grow p-6">
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-5 flex-grow text-left hyphens-auto leading-relaxed" lang="de">
                  {product.description}
                </p>
                <Link href={product.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="cta-button w-full mt-auto">Mehr erfahren</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cta-button">Alle Produkte ansehen</Button>
          </Link>
          {/* Überprüfe den Link zur Produkte-Seite */}
          <Link href="/produkte">
            <Button variant="outline" className="border-[#2aaa8a] text-[#2aaa8a]">
              Detaillierte Produktinfos
            </Button>
          </Link>
        </div>

        {/* Lightbox-Komponente */}
        <Lightbox
          isOpen={lightboxOpen}
          imageUrl={selectedImage.url}
          altText={selectedImage.alt}
          onClose={closeLightbox}
        />
      </section>
    </>
  )
}
