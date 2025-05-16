import PageLayout from "@/components/page-layout"
import Newsletter from "@/components/newsletter"

export default function NewsletterPage() {
  return (
    <PageLayout
      title="Newsletter"
      description="Erhalten Sie regelmässig Informationen zu Gesundheitsthemen, Produktneuheiten und exklusive Angebote"
    >
      <div className="max-w-4xl mx-auto">
        <section className="mb-12">
          <p className="text-lg mb-8 text-center">
            Melden Sie sich für unseren Newsletter an und bleiben Sie informiert über die neuesten Entwicklungen im
            Bereich Gesundheit und Wohlbefinden. Wir senden Ihnen regelmässig wertvolle Tipps, Produktneuheiten und
            exklusive Angebote.
          </p>

          <div className="bg-white rounded-lg shadow-md p-8">
            <Newsletter />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Was Sie in unserem Newsletter erwartet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Gesundheitstipps</h3>
              <p>
                Praktische Tipps und Ratschläge für einen gesünderen Lebensstil, basierend auf wissenschaftlichen
                Erkenntnissen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Produktneuheiten</h3>
              <p>
                Informationen über neue Zinzino-Produkte und wie sie Ihre Gesundheit und Ihr Wohlbefinden unterstützen
                können.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#2aaa8a]">Exklusive Angebote</h3>
              <p>Sonderangebote und Rabatte, die nur für unsere Newsletter-Abonnenten verfügbar sind.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
          <div className="text-left max-w-3xl mx-auto space-y-6 mt-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Wie oft erhalte ich den Newsletter?</h3>
              <p>
                Wir versenden unseren Newsletter in der Regel einmal pro Monat, um Sie über die neuesten Entwicklungen
                zu informieren, ohne Ihren Posteingang zu überfluten.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Kann ich den Newsletter jederzeit abbestellen?</h3>
              <p>
                Ja, Sie können den Newsletter jederzeit mit einem Klick auf den Abmelde-Link am Ende jeder E-Mail
                abbestellen.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Werden meine Daten sicher behandelt?</h3>
              <p>
                Absolut. Wir nehmen den Schutz Ihrer Daten sehr ernst und verwenden Ihre E-Mail-Adresse ausschliesslich
                für den Versand des Newsletters. Ihre Daten werden niemals an Dritte weitergegeben.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
