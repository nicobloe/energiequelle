import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Sabine M.",
    text: "Hallo mir gefällt das Produkt",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas K.",
    text: "Hallo mir gefällt das Produkt",
    rating: 5,
  },
  {
    id: 3,
    name: "Martina S.",
    text: "Hallo mir gefällt das Produkt",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <>
      {/* Unsichtbarer Anker-Punkt für die Navigation */}
      <div id="testimonials" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="section bg-gray-50 pt-8 md:pt-12">
        <h2 className="section-title">Kundenerfahrungen</h2>
        <p className="section-subtitle">
          Erfahren Sie, wie Zinzino-Produkte das Leben unserer Kunden positiv verändert haben.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 px-2 sm:px-4 md:px-0">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-[#FFA500] fill-[#FFA500]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-[#FFA500] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/erfahrungsberichte">
            <Button className="cta-button">Mehr Erfahrungsberichte lesen</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
