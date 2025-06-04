"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles, Shield, Calendar, Star, Users } from "lucide-react"

export default function Hero() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  // Safe string handling function
  const safeString = (value: any): string => {
    if (value === null || value === undefined) {
      return ""
    }
    return String(value)
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#9BCCED]/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[#9BCCED]" />
              <span className="text-sm font-medium text-[#968C83]">Wissenschaftlich validiert</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Deine Gesundheit
              <br />
              <span className="text-[#9BCCED]">messbar</span> verbessern
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Starte mit einem einfachen Test von Zinzino – als offizieller Partner begleiten wir dich auf dem Weg zu
              mehr Balance und Wohlbefinden.
            </p>
          </div>

          {/* Cards Layout - Improved Grid */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-6 h-[800px]">
              {/* Main Personal Consultation Card - Takes up left column, both rows */}
              <div className="row-span-2">
                <div
                  className="bg-[#968C83] rounded-3xl p-8 text-white shadow-2xl h-full flex flex-col transform hover:scale-105 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setActiveCard(1)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="mb-6">
                    <span className="text-xs font-medium opacity-80 uppercase tracking-wide">PERSÖNLICHE BERATUNG</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Dein direkter Draht zu optimaler Gesundheit</h3>
                  <p className="text-white/90 text-base mb-5 leading-relaxed">
                    Als zertifizierter Zinzino-Partner mit über 5 Jahren Erfahrung begleite ich dich persönlich auf
                    deinem Weg zu mehr Wohlbefinden.
                  </p>

                  {/* Erich's Image */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-40 h-40 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                      <Image
                        src="/images/team/erich-zwyssig.png"
                        alt="Erich Zwyssig - Dein persönlicher Gesundheitsexperte"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Erich Zwyssig</h4>
                      <p className="text-white/80 text-sm">Gesundheitsexperte & Zinzino Partner</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-5 flex-grow">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-[#9BCCED]" />
                        <span className="text-sm">Vor Ort in Stans oder online per Zoom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Star className="h-4 w-4 text-[#9BCCED]" />
                        <span className="text-sm">Individuelle Produktempfehlungen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-[#9BCCED]" />
                        <span className="text-sm">Langfristige Begleitung & Support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#9BCCED]" />
                        <span className="text-sm">Kostenlose Erstberatung</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mt-auto">
                    <Button
                      asChild
                      className="bg-white text-[#968C83] hover:bg-gray-100 w-full rounded-xl font-semibold py-3"
                    >
                      <Link href="/contact">
                        Kostenlosen Termin buchen
                        <Calendar className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Health Protocol Card - Top right */}
              <div className="col-span-2">
                <div
                  className="bg-white rounded-3xl p-6 shadow-xl h-full flex flex-col transform hover:scale-105 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setActiveCard(2)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="mb-4">
                    <span className="text-xs font-medium text-[#9BCCED] uppercase tracking-wide bg-[#9BCCED]/10 px-3 py-1 rounded-full">
                      GESUNDHEITSPROTOKOLL
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Das komplette 3-Stufen-Programm</h3>
                  <p className="text-gray-600 mb-6">
                    Balance, Darmgesundheit und Vitalität in einem Kit. Wissenschaftlich entwickelt für optimale
                    Gesundheit und Wohlbefinden.
                  </p>

                  {/* Product Images - Larger and with labels */}
                  <div className="grid grid-cols-3 gap-6 mb-8 flex-grow">
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-50 rounded-xl p-4 mb-2 w-full h-40 flex items-center justify-center">
                        <Image
                          src="/images/balanceoil-plus.png"
                          alt="BalanceOil+"
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">BalanceOil+</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-50 rounded-xl p-4 mb-2 w-full h-40 flex items-center justify-center">
                        <Image
                          src="/images/zinobiotic-plus.png"
                          alt="ZinoBiotic+"
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">ZinoBiotic+</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-50 rounded-xl p-4 mb-2 w-full h-40 flex items-center justify-center">
                        <Image
                          src="/images/viva-plus.png"
                          alt="Viva+"
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">Viva+</span>
                    </div>
                  </div>
                  {/* Add button at the end */}
                  <div className="mt-auto pt-4">
                    <Button
                      asChild
                      className="bg-[#9BCCED] hover:bg-[#7FB3E3] text-white font-semibold w-full rounded-xl py-3"
                    >
                      <Link
                        href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/premier-kits/health-protocol-kit/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gesundheitsprotokoll bestellen
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Balance Test Card - Bottom left of right side (now in blue) */}
              <div>
                <div
                  className="bg-[#9BCCED] rounded-3xl p-6 text-white shadow-xl h-full flex flex-col transform hover:scale-105 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setActiveCard(3)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="mb-4">
                    <span className="text-xs font-medium opacity-80 uppercase tracking-wide">BALANCE TEST</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Deine persönliche Omega-Analyse</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Einfacher Bluttest für zu Hause mit detaillierter Auswertung deiner Omega-Balance.
                  </p>

                  {/* Test Steps */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-4 flex-grow">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                          <span className="text-[#9BCCED] text-xs font-bold">1</span>
                        </div>
                        <span>Test bestellen</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-4 h-4 bg-white/50 rounded-full flex items-center justify-center">
                          <span className="text-[#9BCCED] text-xs font-bold">2</span>
                        </div>
                        <span>Probe einsenden</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-4 h-4 bg-white/30 rounded-full flex items-center justify-center">
                          <span className="text-[#9BCCED] text-xs font-bold">3</span>
                        </div>
                        <span>Ergebnisse erhalten</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="sm"
                    className="bg-white text-[#9BCCED] hover:bg-gray-100 rounded-xl font-semibold w-full"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/home-health-tests/309000/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Test bestellen
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Trust Badge Card - Bottom right */}
              <div>
                <div className="bg-white rounded-3xl p-6 shadow-lg h-full flex flex-col transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-[#968C83]" />
                    <span className="text-sm font-semibold text-gray-900">Offizieller Partner</span>
                  </div>
                  <div className="mb-4 flex-grow flex items-center justify-center">
                    <Image
                      src="/images/zinzino-independent-partner-logo-black.png"
                      alt="Zinzino Partner"
                      width={200}
                      height={80}
                      className="object-contain w-full h-full max-w-[200px] max-h-[80px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500">Schweiz • Seit 2018</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-gray-500 ml-1">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              {/* Personal Consultation Card */}
              <div className="bg-[#968C83] rounded-3xl p-6 text-white shadow-2xl">
                <div className="mb-3">
                  <span className="text-xs font-medium opacity-80 uppercase tracking-wide">PERSÖNLICHE BERATUNG</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Dein direkter Draht zu optimaler Gesundheit</h3>

                {/* Erich's Image for Mobile */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10">
                    <Image
                      src="/images/team/erich-zwyssig.png"
                      alt="Erich Zwyssig"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Erich Zwyssig</h4>
                    <p className="text-white/80 text-sm">Gesundheitsexperte</p>
                  </div>
                </div>

                <p className="text-white/80 mb-5 text-sm">
                  Kostenlose Erstberatung vor Ort in Stans oder online per Zoom.
                </p>
                <Button
                  asChild
                  className="bg-white text-[#968C83] hover:bg-gray-100 w-full rounded-xl font-semibold py-2.5"
                >
                  <Link href="/contact">
                    Kostenlosen Termin buchen
                    <Calendar className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Health Protocol Card */}
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <div className="mb-4">
                  <span className="text-xs font-medium text-[#9BCCED] uppercase tracking-wide bg-[#9BCCED]/10 px-3 py-1 rounded-full">
                    GESUNDHEITSPROTOKOLL
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Das komplette 3-Stufen-Programm</h3>
                <p className="text-gray-600 text-sm mb-6">Balance, Darmgesundheit und Vitalität in einem Kit.</p>
                <Button asChild size="sm" className="bg-[#9BCCED] hover:bg-[#7FB3E3] rounded-xl w-full">
                  <Link
                    href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/premier-kits/health-protocol-kit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bestellen
                  </Link>
                </Button>
              </div>

              {/* Bottom row for mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#9BCCED] rounded-3xl p-6 text-white shadow-xl">
                  <div className="mb-4">
                    <span className="text-xs font-medium opacity-80 uppercase tracking-wide">BALANCE TEST</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Omega-Analyse</h3>
                  <Button
                    asChild
                    size="sm"
                    className="bg-white text-[#9BCCED] hover:bg-gray-100 rounded-xl font-semibold w-full"
                  >
                    <Link
                      href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/home-health-tests/309000/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Test bestellen
                    </Link>
                  </Button>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5 text-[#968C83]" />
                    <span className="text-sm font-semibold text-gray-900">Offizieller Partner</span>
                  </div>
                  <Image
                    src="/images/zinzino-independent-partner-logo-black.png"
                    alt="Zinzino Partner"
                    width={100}
                    height={30}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
