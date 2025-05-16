import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Mehr als nur ein Gefühl - Dein Bauchgefühl gibt den Ton an",
    excerpt:
      "Erfahre, wie du dein Mikrobiom auf natürliche Weise stärken kannst und warum eine gesunde Darmflora entscheidend für dein Wohlbefinden ist.",
    date: "15. Mai 2023",
    image: "/images/zinobiotic-smoothie.png",
    url: "/blog/gut-health",
    category: "Darmgesundheit",
  },
  {
    id: 2,
    title: "Stoffwechsel aktivieren: Tipps und Tricks",
    excerpt: "Mit diesen einfachen Methoden kannst du deinen Stoffwechsel ankurbeln und deine Energielevels steigern.",
    date: "28. April 2023",
    image: "/images/metabolism-boost.png",
    category: "Stoffwechsel",
  },
  {
    id: 3,
    title: "Gesunde Ernährung im Alltag integrieren",
    excerpt:
      "Praktische Tipps, wie du auch bei einem vollen Terminkalender eine ausgewogene Ernährung beibehalten kannst.",
    date: "10. April 2023",
    image: "/healthy-meal-prep.png",
    category: "Ernährung",
  },
  {
    id: 4,
    title: "Die Kraft der Omega-3-Fettsäuren",
    excerpt:
      "Warum Omega-3-Fettsäuren so wichtig für deine Gesundheit sind und wie du sie optimal in deinen Ernährungsplan integrierst.",
    date: "5. März 2023",
    image: "/images/omega3-health.png",
    category: "Omega-Balance",
  },
  {
    id: 5,
    title: "Natürliche Wege zur Stärkung deines Immunsystems",
    excerpt:
      "Entdecke, wie du dein Immunsystem mit natürlichen Methoden und den richtigen Nährstoffen unterstützen kannst.",
    date: "20. Februar 2023",
    image: "/images/zinzino-products-lifestyle.png",
    category: "Immunsystem",
  },
  {
    id: 6,
    title: "Kollagen - Der Schlüssel zu jugendlicher Haut",
    excerpt:
      "Alles über Kollagen, seine Bedeutung für deine Haut und wie du den natürlichen Kollagenabbau verlangsamen kannst.",
    date: "15. Januar 2023",
    image: "/images/collagen-boozt-new.png",
    category: "Hautgesundheit",
  },
]

export default function BlogPage() {
  return (
    <PageLayout title="Blog" description="Informative Artikel und Tipps rund um Gesundheit, Ernährung und Wohlbefinden">
      <div className="max-w-6xl mx-auto">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden product-card">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.url || "#"}
                    className="text-[#2aaa8a] font-medium hover:underline"
                    target={post.url && post.url.startsWith("http") ? "_blank" : "_self"}
                  >
                    Weiterlesen
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Beliebte Kategorien</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Darmgesundheit",
              "Omega-Balance",
              "Ernährung",
              "Stoffwechsel",
              "Immunsystem",
              "Hautgesundheit",
              "Fitness",
              "Wohlbefinden",
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition-colors p-4 rounded-lg text-center cursor-pointer"
              >
                <span className="font-medium">{category}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Newsletter abonnieren</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Erhalte regelmässig neue Artikel, Gesundheitstipps und exklusive Angebote direkt in dein Postfach.
            </p>
            <Button asChild className="cta-button">
              <Link href="/newsletter">Jetzt anmelden</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
