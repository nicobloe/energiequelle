"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import TrustSignals from "./trust-signals"

export default function Hero() {
  const [showProtocol, setShowProtocol] = useState(false)

  return (
    <>
      <section className="section pt-24 pb-8 md:pt-32 md:pb-12 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                ENTSCHLÜSSELN SIE DAS GEHEIMNIS FÜR EIN AUSGEGLICHENES LEBEN
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mb-8 text-gray-700">
                Starten Sie noch heute Ihre Reise zu einer besseren Gesundheit
              </h2>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                Eine gute Gesundheit beginnt mit einem guten Gleichgewicht – vor allem in unseren Zellen, im Darm und im
                Immunsystem. Beginnend mit einem einzigartigen Test stellt das dreistufige Zinzino-Gesundheitsprotokoll
                in Ihrem Körper die Balance wieder her, stärkt ihn und trägt zu seiner Regeneration bei, so erhöhen sich
                Ihre Chancen auf ein gesünderes und glücklicheres Leben.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild className="cta-button">
                  <Link
                    href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/premier-kits/health-protocol-kit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    KAUFE DAS HEALTH PROTOCOL KIT
                  </Link>
                </Button>

                {/* Mehr erfahren Button */}
                <Button
                  variant="outline"
                  onClick={() => setShowProtocol(!showProtocol)}
                  className="border-[#9BCCED] text-[#9BCCED] flex items-center gap-2"
                >
                  <span>Mehr erfahren</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${showProtocol ? "rotate-180" : ""}`}
                  />
                </Button>
              </div>

              <TrustSignals />
            </div>

            {/* Right side - Product image */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/images/zinzino-health-protocol-kit.png"
                  alt="Zinzino Health Protocol Kit - Komplettes Gesundheitsprogramm mit BalanceTest, BalanceOil+, Xtend+ und ZinoBiotic+"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neuer Abschnitt für die Health Protocol Informationen */}
      <section
        className={`bg-gray-50 pt-8 pb-4 transition-all duration-500 ease-in-out overflow-hidden ${
          showProtocol ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Das 3-Schritte Health Protocol</h2>

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
            <div className="inline-block bg-white px-8 py-4 rounded-lg border border-gray-200 mb-8">
              <p className="text-xl font-medium text-gray-800">
                ✓ Wissenschaftlich fundiert • ✓ 4-Monats-Programm • ✓ Messbare Ergebnisse
              </p>
            </div>

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
