import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function Stoffwechselkur() {
  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="stoffwechselkur" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section bg-gray-50 pt-8 md:pt-12">
        <h2 className="section-title">Stoffwechselkur</h2>
        <p className="section-subtitle">
          Ein ganzheitliches Regenerations- und Präventionskonzept für mehr Vitalität und Wohlbefinden
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
          <div className="h-full">
            <p className="text-lg mb-6">
              Vom ursprünglichen «Abnehm-Konzept» hat sich unsere Stoffwechselkur zu einem ganzheitlichen Regenerations-
              und Präventionskonzept entwickelt. Die Kur bringt folgende Vorteile für dich:
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Entsäuerung durch basisches Essen (viel Gemüse, Obst und mageres Fleisch)",
                "Proteinreiches Essen",
                "Entgiftung durch ein erstklassiges Vulkanmineral (100% natürlich)",
                "Vollständige, umfassende und hochwertige Basisversorgung mit rein natürlichen Mikronährstoffen",
                "Aktivierung des Stoffwechsels durch Streukügelchen mit Signalwirkung auf den Körper",
                "Depotfett-Abbau",
                "Darm-Regulierung",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#2aaa8a] p-1.5 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 mb-6">
              <p className="italic text-gray-700">
                "Teilnehmer der Kur fühlen sich wieder fitter, leichter und aktiver. Das allgemeine Wohlbefinden wurde
                durchs Band gesteigert. Die Mitarbeit von Ärzten und Wissenschaftlern bei der Ausarbeitung des
                Kurkonzepts zeugen von dessen Seriosität und Fundiertheit."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Überprüfe den Link zur Stoffwechselkur-Seite */}
              <Button asChild className="cta-button">
                <Link href="/stoffwechselkur">Mehr zur Stoffwechselkur</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px]">
            <Image
              src="/images/stoffwechselkur-woman.png"
              alt="Frau geniesst Vitalität und Wohlbefinden nach der Stoffwechselkur"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg shadow-lg object-cover object-[center_20%]"
              priority
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md hidden md:block">
              <div className="text-[#2aaa8a] font-bold">Mehr Vitalität & Wohlbefinden</div>
              <div className="text-gray-600 text-sm">Spüre den Unterschied</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
