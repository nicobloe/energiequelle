import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UeberUnsPage() {
  return (
    <PageLayout
      title="Über uns"
      description="Lerne mich kennen und erfahre mehr über meine Mission für deine Gesundheit und dein Wohlbefinden"
    >
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meine Geschichte</h2>
              <p className="text-lg mb-4">
                Als leidenschaftlicher Gesundheitsexperte habe ich energiequelle gegründet, um Menschen dabei zu helfen,
                ihr volles Potenzial zu entfalten. Meine Reise begann mit der Erkenntnis, dass echte Gesundheit mehr ist
                als die Abwesenheit von Krankheit – sie ist ein Zustand des vollständigen körperlichen, geistigen und
                sozialen Wohlbefindens.
              </p>
              <p className="text-lg mb-4">
                Seit der Gründung im Jahr 2018 habe ich mich darauf konzentriert, Menschen zu helfen, ihre Gesundheit
                durch einen ganzheitlichen Ansatz zu verbessern. Ich glaube daran, dass jeder Mensch einzigartig ist und
                individuelle Bedürfnisse hat.
              </p>
              <p className="text-lg">
                Als offizieller Zinzino-Partner teile ich die Vision, durch hochwertige, wissenschaftlich fundierte
                Nahrungsergänzungsmittel einen positiven Einfluss auf die Gesundheit von Menschen zu nehmen.
              </p>
            </div>
            <div>
              <Image
                src="/images/team/erich-zwyssig.png"
                alt="Erich Zwyssig - Inhaber energiequelle"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Meine Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Qualität</h3>
              <p>
                Ich setze auf höchste Qualitätsstandards bei allen Produkten und Dienstleistungen, die ich anbiete. Nur
                das Beste ist gut genug für meine Kunden.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Wissenschaftliche Fundierung</h3>
              <p>
                Alle meine Empfehlungen und Produkte basieren auf wissenschaftlichen Erkenntnissen und werden
                kontinuierlich durch neue Forschungsergebnisse verbessert.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Persönliche Betreuung</h3>
              <p>
                Ich glaube an individuelle Lösungen und biete jedem Kunden eine persönliche Betreuung, die auf seine
                spezifischen Bedürfnisse zugeschnitten ist.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-6">Möchten Sie mehr erfahren?</h2>
          <p className="text-lg mb-8">
            Ich freue mich darauf, Sie kennenzulernen und gemeinsam an Ihrer Gesundheit zu arbeiten.
          </p>
          <Button asChild className="cta-button">
            <Link href="/contact">Kontaktieren Sie mich</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
