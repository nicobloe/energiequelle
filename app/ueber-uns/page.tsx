import PageLayout from "@/components/page-layout"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UeberUnsPage() {
  return (
    <PageLayout
      title="Über uns"
      description="Lerne uns kennen und erfahre mehr über unsere Mission für deine Gesundheit und dein Wohlbefinden"
    >
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-lg mb-4">
                Als leidenschaftliche Gesundheitsexperten haben wir energiequelle gegründet, um Menschen dabei zu
                helfen, ihr volles Potenzial zu entfalten. Unsere Reise begann mit der Erkenntnis, dass echte Gesundheit
                mehr ist als die Abwesenheit von Krankheit – sie ist ein Zustand des vollständigen körperlichen,
                geistigen und sozialen Wohlbefindens.
              </p>
              <p className="text-lg mb-4">
                Seit unserer Gründung im Jahr 2018 haben wir uns darauf konzentriert, Menschen zu helfen, ihre
                Gesundheit durch einen ganzheitlichen Ansatz zu verbessern. Wir glauben daran, dass jeder Mensch
                einzigartig ist und individuelle Bedürfnisse hat.
              </p>
              <p className="text-lg">
                Als offizieller Zinzino-Partner teilen wir die Vision, durch hochwertige, wissenschaftlich fundierte
                Nahrungsergänzungsmittel einen positiven Einfluss auf die Gesundheit von Menschen zu nehmen.
              </p>
            </div>
            <div>
              <Image
                src="/images/energiequelle-team.png"
                alt="Das energiequelle Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Qualität</h3>
              <p>
                Wir setzen auf höchste Qualitätsstandards bei allen Produkten und Dienstleistungen, die wir anbieten.
                Nur das Beste ist gut genug für unsere Kunden.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Wissenschaftliche Fundierung</h3>
              <p>
                Alle unsere Empfehlungen und Produkte basieren auf wissenschaftlichen Erkenntnissen und werden
                kontinuierlich durch neue Forschungsergebnisse verbessert.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Persönliche Betreuung</h3>
              <p>
                Wir glauben an individuelle Lösungen und bieten jedem Kunden eine persönliche Betreuung, die auf seine
                spezifischen Bedürfnisse zugeschnitten ist.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Unser Team</h2>
          <p className="text-lg mb-8">
            Hinter energiequelle steht ein Team von engagierten Gesundheitsexperten mit unterschiedlichen
            Fachkenntnissen. Wir vereinen Wissen aus den Bereichen Ernährungswissenschaft, Sportwissenschaft und
            ganzheitliche Gesundheit, um Ihnen die bestmögliche Beratung zu bieten.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-[#2aaa8a] rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                MS
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Maria Schneider</h3>
                <p className="text-[#2aaa8a] font-medium mb-2">Gründerin & Gesundheitsberaterin</p>
                <p className="text-gray-600">
                  Mit über 15 Jahren Erfahrung im Bereich Ernährung und Gesundheit ist Maria die treibende Kraft hinter
                  energiequelle. Ihre Leidenschaft ist es, Menschen zu einem gesünderen Lebensstil zu inspirieren.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-[#2aaa8a] rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                TM
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Thomas Müller</h3>
                <p className="text-[#2aaa8a] font-medium mb-2">Ernährungsberater</p>
                <p className="text-gray-600">
                  Thomas ist spezialisiert auf personalisierte Ernährungspläne und hilft unseren Kunden, ihre Ernährung
                  optimal auf ihre individuellen Bedürfnisse abzustimmen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-6">Möchten Sie mehr erfahren?</h2>
          <p className="text-lg mb-8">
            Wir freuen uns darauf, Sie kennenzulernen und gemeinsam an Ihrer Gesundheit zu arbeiten.
          </p>
          <Button asChild className="cta-button">
            <Link href="/contact">Kontaktieren Sie uns</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
