"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Zap, Heart, Shield, Sparkles } from "lucide-react"

// Safe string handling function
const safeString = (value: any): string => {
  if (value === null || value === undefined) {
    return ""
  }
  return String(value)
}

const products = [
  {
    id: 1,
    name: "BalanceOil+",
    category: "OMEGA-BALANCE",
    description: "Optimiere dein Omega-6:3-Verhältnis für bessere Herzgesundheit und Zellschutz.",
    image: "/images/balanceoil-plus.png",
    link: "https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/omega-supplements/300000/",
    color: "bg-[#968C83]",
    icon: Heart,
    benefits: ["Herzgesundheit", "Zellschutz", "Entzündungshemmung"],
  },
  {
    id: 2,
    name: "ZinoBiotic+",
    category: "DARMGESUNDHEIT",
    description: "8 natürliche Ballaststoffe für ein gesundes Mikrobiom und optimale Verdauung.",
    image: "/images/zinobiotic-plus.png",
    link: "https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/gut-health-supplements/301390/",
    color: "bg-[#9BCCED]",
    icon: Zap,
    benefits: ["Darmflora", "Verdauung", "Immunsystem"],
  },
  {
    id: 3,
    name: "BalanceTest",
    category: "ANALYSE",
    description: "Heimtest zur Analyse deines persönlichen Omega-Status mit detaillierten Empfehlungen.",
    image: "/images/viva-plus.png",
    link: "https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/home-health-tests/309000/",
    color: "bg-white",
    textColor: "text-gray-900",
    icon: Shield,
    benefits: ["Personalisiert", "Wissenschaftlich", "Einfach"],
  },
  {
    id: 4,
    name: "Collagen Boozt",
    category: "HAUTPFLEGE",
    description: "Meereskollagen und Hyaluronsäure für strahlende Haut von innen heraus.",
    image: "/images/collagen-boozt-new.png",
    link: "https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/skin-nutrition/302800/",
    color: "bg-gradient-to-br from-pink-400 to-purple-500",
    icon: Sparkles,
    benefits: ["Anti-Aging", "Hautstraffung", "Hydration"],
  },
]

export default function Products() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <>
      <div id="products" className="-mt-20 pt-20 invisible absolute"></div>

      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#9BCCED]/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[#9BCCED]" />
              <span className="text-sm font-medium text-[#968C83]">Wissenschaftlich fundiert</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Produkte, die dein Leben
              <br />
              <span className="text-[#9BCCED]">messbar</span> verbessern
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecke die hochwertigen Nahrungsergänzungsmittel von Zinzino, entwickelt auf wissenschaftlicher Basis
              für optimale Gesundheit.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => {
              const IconComponent = product.icon || Heart
              const isLarge = index === 0 || index === 1
              const productName = safeString(product.name)
              const productCategory = safeString(product.category)
              const productDescription = safeString(product.description)
              const productImage = product.image || "/placeholder.svg"
              const productLink = product.link || "#"
              const productColor = product.color || "bg-gray-100"
              const productTextColor = product.textColor || ""
              const productBenefits = product.benefits || []

              return (
                <div
                  key={product.id || index}
                  className={`${productColor} ${productTextColor || "text-white"} rounded-3xl p-8 shadow-xl transform transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isLarge ? "lg:row-span-1" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(product.id || null)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span
                          className={`text-xs font-medium uppercase tracking-wide ${
                            productTextColor ? "text-gray-500" : "opacity-80"
                          }`}
                        >
                          {productCategory}
                        </span>
                        <h3 className="text-2xl font-bold mt-1">{productName}</h3>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          productTextColor ? "bg-[#9BCCED]/10" : "bg-white/20"
                        }`}
                      >
                        <IconComponent className={`h-6 w-6 ${productTextColor ? "text-[#9BCCED]" : "text-white"}`} />
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="flex-1 flex items-center justify-center mb-6">
                      <div
                        className={`w-32 h-32 rounded-2xl flex items-center justify-center ${
                          productTextColor ? "bg-gray-50" : "bg-white/10"
                        } backdrop-blur-sm`}
                      >
                        <img
                          src={productImage || "/placeholder.svg"}
                          alt={productName}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-lg mb-6 ${productTextColor ? "text-gray-600" : "opacity-90"}`}>
                      {productDescription}
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {productBenefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            productTextColor ? "bg-[#9BCCED]/10 text-[#9BCCED]" : "bg-white/20 text-white"
                          }`}
                        >
                          {safeString(benefit)}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className={`w-full rounded-xl font-semibold transition-all duration-300 ${
                        productTextColor
                          ? "bg-[#9BCCED] hover:bg-[#7FB3E3] text-white"
                          : "bg-white text-gray-900 hover:bg-gray-100"
                      } ${hoveredCard === product.id ? "transform translate-y-0" : ""}`}
                    >
                      <Link href={productLink} target="_blank" rel="noopener noreferrer">
                        Mehr erfahren
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 bg-white rounded-2xl p-6 shadow-lg">
              <Button asChild size="lg" className="bg-[#9BCCED] hover:bg-[#7FB3E3] rounded-xl font-semibold">
                <Link
                  href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alle Produkte ansehen
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#968C83] text-[#968C83] hover:bg-[#968C83] hover:text-white rounded-xl font-semibold"
              >
                <Link href="/produkte">Detaillierte Infos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
