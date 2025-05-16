import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon, Quote } from "lucide-react"
import Image from "next/image"
import ScrollReset from "./scroll-reset"

const testimonials = [
  {
    id: 1,
    name: "Sabine M.",
    text: "Seit ich BalanceOil+ nehme, hat sich mein Energielevel deutlich verbessert. Ich fühle mich fitter und ausgeglichener im Alltag. Besonders beeindruckend war für mich, dass ich nach nur 4 Monaten regelmässiger Einnahme meine Omega-Werte deutlich verbessern konnte, was durch den BalanceTest bestätigt wurde.",
    rating: 5,
    product: "BalanceOil+",
    image: "/images/balanceoil-plus.png",
  },
  {
    id: 2,
    name: "Thomas K.",
    text: "Die Produkte von Zinzino haben meine Lebensqualität spürbar verbessert. Besonders das ZinoBiotic+ hat meiner Verdauung sehr geholfen. Nach jahrelangen Problemen mit Blähungen und Unwohlsein habe ich endlich eine Lösung gefunden, die mir hilft, mich wieder wohlzufühlen. Ich kann es nur empfehlen!",
    rating: 5,
    product: "ZinoBiotic+",
    image: "/images/zinobiotic-plus.png",
  },
  {
    id: 3,
    name: "Martina S.",
    text: "Als Sportlerin ist eine optimale Ernährung für mich essentiell. Mit Zinzino habe ich die perfekte Ergänzung gefunden, um meine Leistung zu steigern. Besonders während intensiver Trainingsperioden merke ich den Unterschied deutlich. Die Produkte sind hochwertig und ich schätze die wissenschaftliche Basis dahinter.",
    rating: 4,
    product: "BalanceOil+ und ZinoBiotic+",
    image: "/images/zinzino-products-lifestyle.png",
  },
  {
    id: 4,
    name: "Peter W.",
    text: "Nach der Stoffwechselkur fühle ich mich wie neugeboren. Ich habe nicht nur 7 kg abgenommen, sondern auch viel mehr Energie im Alltag. Die professionelle Begleitung während der Kur war hervorragend und hat mir geholfen, meine Ernährungsgewohnheiten langfristig umzustellen.",
    rating: 5,
    product: "Stoffwechselkur",
    image: "/images/stoffwechselkur-woman.png",
  },
  {
    id: 5,
    name: "Lisa B.",
    text: "Collagen Boozt hat meine Haut komplett verändert. Nach etwa 6 Wochen regelmässiger Anwendung bemerkte ich eine deutliche Verbesserung der Hautfestigkeit und weniger feine Linien. Auch meine Nägel sind viel stärker geworden. Der Kirschgeschmack ist angenehm und die Anwendung einfach.",
    rating: 5,
    product: "Collagen Boozt",
    image: "/images/collagen-boozt-new.png",
  },
  {
    id: 6,
    name: "Michael H.",
    text: "Der BalanceTest war ein echter Augenöffner für mich. Ich hätte nie gedacht, dass mein Omega-6:3-Verhältnis so unausgewogen ist. Nach 4 Monaten mit BalanceOil+ konnte ich meine Werte deutlich verbessern und fühle mich insgesamt gesünder und energiegeladener.",
    rating: 5,
    product: "BalanceTest",
    image: "/images/viva-plus.png",
  },
]

export default function ErfahrungsberichtePage() {
  return (
    <PageLayout
      title="Kundenerfahrungen"
      description="Erfahren Sie, wie Zinzino-Produkte das Leben unserer Kunden positiv verändert haben"
    >
      <ScrollReset />
      <div className="max-w-6xl mx-auto">
        <section className="mb-12">
          <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
            Unsere Kunden berichten von ihren persönlichen Erfahrungen mit Zinzino-Produkten und der Stoffwechselkur.
            Lesen Sie, wie unsere Produkte und Dienstleistungen das Leben und die Gesundheit unserer Kunden verbessert
            haben.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-[#FFA500] fill-[#FFA500]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="mb-4 h-40 overflow-hidden rounded-lg">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.product}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-[#2aaa8a] mr-2" />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">Produkt: {testimonial.product}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ihre Erfahrung teilen</h2>
          <p className="text-lg mb-6">
            Haben Sie bereits Erfahrungen mit unseren Produkten gemacht? Wir würden uns freuen, wenn Sie Ihre Geschichte
            mit uns teilen!
          </p>
          <Button asChild className="cta-button">
            <Link href="/contact">Erfahrung teilen</Link>
          </Button>
        </section>
      </div>
    </PageLayout>
  )
}
