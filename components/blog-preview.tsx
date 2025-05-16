import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Mehr als nur ein Gefühl - Dein Bauchgefühl gibt den Ton an",
    excerpt:
      "Erfahre, wie du dein Mikrobiom auf natürliche Weise stärken kannst und warum eine gesunde Darmflora entscheidend für dein Wohlbefinden ist.",
    date: "9. April 2025",
    image: "/images/zinobiotic-smoothie.png",
    url: "/blog/gut-health",
  },
  {
    id: 2,
    title: "Omega-3 reduziert laut Schweizer Studie das biologische Alter",
    excerpt:
      "Omega-3-Fettsäuren können laut einer neuen Studie das Altern messbar verlangsamen. Die tägliche Einnahme von einem Gramm Omega-3 verlangsamt die biologische Alterung um bis zu vier Monate.",
    date: "5. Februar 2025",
    image: "/images/grandfather-with-baby.png",
    url: "/blog/omega3-aging",
  },
]

export default function BlogPreview() {
  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="blog" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section pt-8 md:pt-12">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">Informative Artikel und Tipps rund um Gesundheit, Ernährung und Wohlbefinden</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
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

        <div className="text-center mt-12">
          {/* Überprüfe den Link zur Blog-Seite */}
          <Link href="/blog">
            <Button className="cta-button">Alle Blogbeiträge</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
