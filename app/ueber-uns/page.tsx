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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Unser Team</h2>
            <div className="w-24 h-1 bg-[#2aaa8a] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Hinter energiequelle steht ein Team von engagierten Gesundheitsexperten mit unterschiedlichen
              Fachkenntnissen. Wir vereinen Wissen aus den Bereichen Ernährungswissenschaft, Sportwissenschaft und
              ganzheitliche Gesundheit, um Ihnen die bestmögliche Beratung zu bieten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Erich Zwyssig */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-64 relative">
                <Image
                  src="/images/team/erich-zwyssig.png"
                  alt="Erich Zwyssig - Inhaber energiequelle & Zinzino Experte"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Erich Zwyssig</h3>
                <p className="text-[#2aaa8a] font-medium mb-4 pb-4 border-b border-gray-100">
                  Inhaber energiequelle & Zinzino Experte
                </p>
                <p className="text-gray-600">
                  Als Gründer von energiequelle und langjähriger Zinzino Experte bringt Erich fundiertes Wissen und
                  Erfahrung im Bereich Gesundheit und Nahrungsergänzung mit. Seine Leidenschaft ist es, Menschen zu
                  einem gesünderen Lebensstil zu verhelfen.
                </p>
                <div className="mt-6 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#2aaa8a] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#2aaa8a] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Chiara Jud */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-64 relative">
                <Image
                  src="/images/team/chiara-jud-new.png"
                  alt="Chiara Jud - Inhaberin Ladys Gym"
                  fill
                  className="object-contain object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Chiara Jud</h3>
                <p className="text-[#2aaa8a] font-medium mb-4 pb-4 border-b border-gray-100">Inhaberin Ladys Gym</p>
                <p className="text-gray-600">
                  Chiara bringt als Inhaberin des Ladys Gym wertvolle Expertise im Bereich Fitness und körperliches
                  Wohlbefinden ein. Sie unterstützt unsere Kunden dabei, Bewegung und Ernährung optimal zu kombinieren.
                </p>
                <div className="mt-6 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#2aaa8a] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#2aaa8a] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Nico Blöchlinger */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-r from-[#2aaa8a] to-[#3CD8C8] flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-32 h-32 flex items-center justify-center border-4 border-white">
                  <span className="text-white font-bold text-4xl">NB</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Nico Blöchlinger</h3>
                <p className="text-[#2aaa8a] font-medium mb-4 pb-4 border-b border-gray-100">Website & Social Media</p>
                <p className="text-gray-600">
                  Nico ist verantwortlich für unsere Online-Präsenz und sorgt dafür, dass wir auf allen digitalen
                  Kanälen optimal vertreten sind. Er hilft uns dabei, wertvolle Gesundheitsinformationen ansprechend zu
                  vermitteln.
                </p>
                <div className="mt-6 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-[#2aaa8a] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#2aaa8a] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                </div>
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
