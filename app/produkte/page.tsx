import PageLayout from "@/components/page-layout"
import Products from "@/components/products"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollReset from "./scroll-reset"

export default function ProduktePage() {
  return (
    <PageLayout
      title="Unsere Produkte"
      description="Entdecken Sie die hochwertigen Nahrungsergänzungsmittel von Zinzino, die auf wissenschaftlicher Basis entwickelt wurden."
    >
      <ScrollReset />
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Zinzino Produktphilosophie</h2>
          <p className="text-lg mb-6">
            Zinzino entwickelt hochwertige Nahrungsergänzungsmittel, die auf wissenschaftlichen Erkenntnissen basieren
            und kontinuierlich durch Studien verbessert werden. Unser Ziel ist es, Produkte anzubieten, die einen
            messbaren Unterschied für Ihre Gesundheit machen.
          </p>
          <p className="text-lg mb-6">
            Alle Produkte werden unter strengen Qualitätskontrollen hergestellt und enthalten nur die besten
            Inhaltsstoffe. Wir legen grossen Wert auf Transparenz und Nachhaltigkeit in allen Produktionsprozessen.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Unsere Produktkategorien</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Omega-Balance Produkte</li>
              <li>Immunsystem & Wohlbefinden</li>
              <li>Gewichtsmanagement</li>
              <li>Hautpflege & Kollagen</li>
              <li>Darmgesundheit</li>
              <li>Tests & Analysen</li>
            </ul>
          </div>
        </section>

        <Products />

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Personalisierte Gesundheit</h2>
          <p className="text-lg mb-6">
            Mit dem BalanceTest können Sie Ihren persönlichen Omega-6:3-Status ermitteln und erhalten individuelle
            Empfehlungen für Ihre optimale Gesundheit. Basierend auf Ihren Testergebnissen können wir Ihnen eine
            massgeschneiderte Produktempfehlung geben.
          </p>
          <div className="text-center mt-8">
            <Button asChild className="cta-button">
              <Link
                href="https://www.zinzino.com/shop/site/CH/de-DE/products/shop/home-health-tests/309000/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mehr zum BalanceTest
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
