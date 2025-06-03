"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import TrustSignals from "./trust-signals"

export default function Hero() {
  const [showProtocol, setShowProtocol] = useState(false)
  const [activeOption, setActiveOption] = useState<number | null>(null)

  return (
    <>
      <section className="section pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen flex flex-col">
        <div className="container mx-auto">
          {/* Zentralisierter Header-Bereich */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Deine Gesundheit
              <br />
              <span className="text-[#9BCCED]">messbar</span> verbessern
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Starte mit einem einfachen Test von Zinzino – als offizieller Partner begleiten wir dich auf dem Weg zu
              mehr Balance und Wohlbefinden.
            </p>
          </div>

          {/* Hauptinhalt: Optionen und Bild auf gleicher Höhe */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-1">
            {/* Left side - Optionen */}
            <div className="lg:col-span-6 space-y-8">
              {/* Neuer Titel für Termin Buchen */}
              <div className="space-y-3 pt-4">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">TERMIN BUCHEN:</p>

                {/* Option 3: Persönliche Beratung */}
                <div
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeOption === 3 ? "scale-105" : "hover:scale-102"
                  }`}
                  onMouseEnter={() => setActiveOption(3)}
                  onMouseLeave={() => setActiveOption(null)}
                >
                  <div className="bg-white border-2 border-[#968C83]/20 hover:border-[#968C83] rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div>
                          <h3 className="font-bold text-gray-900">Persönliche Beratung</h3>
                          <p className="text-sm text-gray-600">
                            Individuelle Beratung mit Erich Zwyssig – persönlich vor Ort in Stans oder bequem per Zoom.
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="bg-[#968C83] hover:bg-[#7a6f66] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Link href="/contact">Termin buchen</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drei kompakte Optionen */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">DIREKT ONLINE BESTELLEN:</p>

                {/* Option 1: Balance Test */}
                <div
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeOption === 1 ? "scale-105" : "hover:scale-102"
                  }`}
                  onMouseEnter={() => setActiveOption(1)}
                  onMouseLeave={() => setActiveOption(null)}
                >
                  <div className="bg-white border-2 border-[#9BCCED]/20 hover:border-[#9BCCED] rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div>
                          <h3 className="font-bold text-gray-900">Balance Test</h3>
                          <p className="text-sm text-gray-600">
                            Finde mit einer einfachen Blutanalyse heraus, wie es um deine Zellbalance steht.
                          </p>
                        </div>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="bg-[#9BCCED] hover:bg-[#7FB3E3] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Link
                          href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/home-health-tests/309000/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bestellen
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Option 2: Health Protocol Kit */}
                <div
                  className={`group cursor-pointer transition-all duration-300 ${
                    activeOption === 2 ? "scale-105" : "hover:scale-102"
                  }`}
                  onMouseEnter={() => setActiveOption(2)}
                  onMouseLeave={() => setActiveOption(null)}
                >
                  <div className="bg-white border-2 border-[#9BCCED]/20 hover:border-[#9BCCED] rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 relative">
                    <div className="absolute -top-2 -right-2 bg-[#9BCCED] text-white text-xs px-2 py-1 rounded-full">
                      Beliebt
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div>
                          <h3 className="font-bold text-gray-900">Gesundheitsprotokoll Kit</h3>
                          <p className="text-sm text-gray-600">
                            Das komplette 3-Stufen-Programm für deine Balance, Darmgesundheit und Vitalität.
                          </p>
                          <button
                            onClick={() => {
                              setShowProtocol(true)
                              // Kurze Verzögerung, damit der Bereich erst aufgeklappt wird
                              setTimeout(() => {
                                const protocolTitle = document.getElementById("health-protocol-title")
                                if (protocolTitle) {
                                  protocolTitle.scrollIntoView({ behavior: "smooth", block: "start" })
                                }
                              }, 100)
                            }}
                            className="text-[#9BCCED] text-xs hover:underline mt-1 block"
                          >
                            Mehr erfahren
                          </button>
                        </div>
                      </div>
                      <Button
                        asChild
                        size="sm"
                        className="bg-[#9BCCED] hover:bg-[#7FB3E3] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Link
                          href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/premier-kits/health-protocol-kit/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bestellen
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Interactive Product Showcase */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Hauptprodukt-Display */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#9BCCED]/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#968C83]/10 rounded-full blur-xl"></div>

                  {/* Hauptbild */}
                  <div className="relative z-10">
                    <Image
                      src="/images/zinzino-health-protocol-kit.png"
                      alt="Zinzino Health Protocol Kit"
                      width={700}
                      height={500}
                      className="w-full h-auto object-contain"
                      priority
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                </div>

                {/* Stats/Trust Indicators */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-2xl font-bold text-[#9BCCED]">1000+</div>
                    <div className="text-xs text-gray-600">Zufriedene Kunden</div>
                  </div>
                  <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <CheckCircle className="h-4 w-4 text-[#968C83]" />
                      <div className="text-lg font-bold text-[#968C83]">100%</div>
                    </div>
                    <div className="text-xs text-gray-600">Wissenschaftlich validiert</div>
                  </div>
                  <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex justify-center mb-2">
                      <Image
                        src="/images/zinzino-independent-partner-logo-black.png"
                        alt="Offizieller Zinzino Partner"
                        width={120}
                        height={40}
                        className="h-8 w-auto object-contain bg-white rounded-md px-2 py-1"
                        unoptimized={true}
                      />
                    </div>
                    <div className="text-xs text-gray-600">Offizieller Zinzino-Partner Schweiz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-12">
            <TrustSignals />
          </div>
        </div>
      </section>
      <section
        className={`bg-gray-50 pt-8 pb-4 transition-all duration-500 ease-in-out overflow-hidden ${
          showProtocol ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto">
          <h2 id="health-protocol-title" className="text-3xl font-bold mb-12 text-center">
            Das 3-Schritte Gesundheitsprotokoll
          </h2>

          {/* Schritt 1: Balance */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#9BCCED] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    1
                  </div>
                  <h3 className="text-3xl font-bold">Balance</h3>
                </div>
                <p className="text-xl font-medium mb-4 text-gray-800">Omega-6:3-Balance & Zellschutz</p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  BalanceOil+ stellt das optimale Verhältnis von Omega-6 zu Omega-3 in Ihrem Körper wieder her. Die
                  einzigartige Kombination aus hochwertigem Fischöl und Premium-Olivenöl liefert Omega-3, Polyphenole
                  und Vitamin D3 für maximalen Zellschutz.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 text-lg">
                  <li>Verbessert die Omega-3-Werte nachweislich</li>
                  <li>Unterstützt normale Herz- und Gehirnfunktion</li>
                  <li>Fördert ein gesundes Immunsystem</li>
                  <li>Schützt Zellen vor oxidativem Stress</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img src="/images/balanceoil-plus.png" alt="BalanceOil+" className="w-64 h-64 object-contain" />
              </div>
            </div>
          </div>

          {/* Schritt 2: Regeneration */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#9BCCED] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    2
                  </div>
                  <h3 className="text-3xl font-bold">Regeneration</h3>
                </div>
                <p className="text-xl font-medium mb-4 text-gray-800">Darmgesundheit</p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  ZinoBiotic+ enthält 8 natürliche Ballaststoffe, die Ihre Darmbakterien nähren und eine gesunde
                  Darmfunktion fördern. Die spezielle Mischung unterstützt das Wachstum guter Bakterien und hilft,
                  Entzündungen zu reduzieren.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 text-lg">
                  <li>Fördert das Wachstum guter Darmbakterien</li>
                  <li>Unterstützt die Verdauung</li>
                  <li>Hilft bei der Regulierung des Blutzuckers</li>
                  <li>Reduziert Entzündungen im Darm</li>
                </ul>
              </div>
              <div className="md:order-1 flex justify-center">
                <img src="/images/zinobiotic-plus.png" alt="ZinoBiotic+" className="w-64 h-64 object-contain" />
              </div>
            </div>
          </div>

          {/* Schritt 3: Stärkung */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#9BCCED] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    3
                  </div>
                  <h3 className="text-3xl font-bold">Stärkung</h3>
                </div>
                <p className="text-xl font-medium mb-4 text-gray-800">Immunsystem-Support</p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Xtend+ liefert 23 essentielle Vitamine und Mineralien plus Beta-Glucane für ein starkes Immunsystem.
                  Diese umfassende Formel unterstützt zahlreiche Körperfunktionen und schützt Ihre Zellen vor oxidativem
                  Stress.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 text-lg">
                  <li>Stärkt das Immunsystem</li>
                  <li>Unterstützt die Energieproduktion</li>
                  <li>Schützt vor oxidativem Stress</li>
                  <li>Fördert normale Muskelfunktion</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <img src="/images/viva-plus.png" alt="Xtend/Viva+" className="w-64 h-64 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="cta-button">
              <Link
                href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/premier-kits/health-protocol-kit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JETZT HEALTH PROTOCOL KIT BESTELLEN
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
