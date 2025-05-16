import Link from "next/link"
import PageLayout from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from "lucide-react"

export default function StoffwechselkurPage() {
  return (
    <PageLayout
      title="Stoffwechselkur"
      description="Ein ganzheitliches Regenerations- und Präventionskonzept für mehr Vitalität und Wohlbefinden"
    >
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Was ist die Stoffwechselkur?</h2>
          <p className="text-lg mb-6">
            Vom ursprünglichen «Abnehm-Konzept» hat sich unsere Stoffwechselkur zu einem ganzheitlichen Regenerations-
            und Präventionskonzept entwickelt. Die Kur ist ein umfassendes Programm, das darauf abzielt, Ihren
            Stoffwechsel zu aktivieren, Ihren Körper zu entgiften und Ihre allgemeine Gesundheit zu verbessern.
          </p>
          <p className="text-lg mb-6">
            Die Stoffwechselkur basiert auf wissenschaftlichen Erkenntnissen und wurde in Zusammenarbeit mit Ärzten und
            Ernährungswissenschaftlern entwickelt. Sie kombiniert eine ausgewogene Ernährung mit hochwertigen
            Nahrungsergänzungsmitteln und natürlichen Entgiftungsmethoden.
          </p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Vorteile der Stoffwechselkur</h2>
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
            </div>
            <div className="relative aspect-[4/5] md:aspect-auto md:h-[500px]">
              <Image
                src="/images/stoffwechselkur-woman.png"
                alt="Frau geniesst Vitalität und Wohlbefinden nach der Stoffwechselkur"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg shadow-lg object-cover object-[center_20%]"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ablauf der Stoffwechselkur</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#2aaa8a] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Vorbereitung</h3>
                <p>
                  Persönliches Beratungsgespräch, Analyse Ihrer aktuellen Situation und Festlegung Ihrer individuellen
                  Ziele.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#2aaa8a] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Durchführung</h3>
                <p>
                  21-tägige Kur mit spezieller Ernährung, Nahrungsergänzungsmitteln und regelmässiger Unterstützung
                  durch unsere Experten.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-[#2aaa8a] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Nachbetreuung</h3>
                <p>
                  Langfristige Begleitung zur Erhaltung der Ergebnisse und Integration der neuen Gewohnheiten in Ihren
                  Alltag.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Erfahrungsberichte</h2>
          <p className="text-lg mb-6">
            Teilnehmer der Kur fühlen sich wieder fitter, leichter und aktiver. Das allgemeine Wohlbefinden wurde durchs
            Band gesteigert. Die Mitarbeit von Ärzten und Wissenschaftlern bei der Ausarbeitung des Kurkonzepts zeugen
            von dessen Seriosität und Fundiertheit.
          </p>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 mb-6">
            <p className="italic text-gray-700">
              "Nach der Stoffwechselkur fühle ich mich wie neugeboren. Ich habe nicht nur 8 kg verloren, sondern auch
              viel mehr Energie im Alltag. Meine Verdauungsprobleme sind verschwunden und mein Schlaf hat sich deutlich
              verbessert."
            </p>
            <p className="mt-2 font-medium">- Maria K., 45 Jahre</p>
          </div>
        </section>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihre persönliche Stoffwechselkur?</h2>
          <p className="text-lg mb-8">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie die Stoffwechselkur
            auch Ihr Leben positiv verändern kann.
          </p>
          <Button asChild className="cta-button">
            <Link href="/contact">Jetzt Beratungstermin vereinbaren</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
