import { StarIcon, Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Safe string handling function
const safeString = (value: any): string => {
  if (value === null || value === undefined) {
    return ""
  }
  return String(value)
}

const testimonials = [
  {
    id: 1,
    name: "Sabine M.",
    role: "Kundin seit 2022",
    text: "Seit ich BalanceOil+ nehme, hat sich mein Energielevel deutlich verbessert. Ich fühle mich fitter und ausgeglichener im Alltag.",
    rating: 5,
    product: "BalanceOil+",
    avatar: "S",
  },
  {
    id: 2,
    name: "Thomas K.",
    role: "Kunde seit 2021",
    text: "Die Produkte von Zinzino haben meine Lebensqualität spürbar verbessert. Besonders das ZinoBiotic+ hat meiner Verdauung sehr geholfen.",
    rating: 5,
    product: "ZinoBiotic+",
    avatar: "T",
  },
  {
    id: 3,
    name: "Martina S.",
    role: "Sportlerin",
    text: "Als Sportlerin ist eine optimale Ernährung für mich essentiell. Mit Zinzino habe ich die perfekte Ergänzung gefunden, um meine Leistung zu steigern.",
    rating: 4,
    product: "Health Protocol Kit",
    avatar: "M",
  },
]

export default function Testimonials() {
  return (
    <>
      <div id="testimonials" className="-mt-24 pt-24 invisible absolute"></div>

      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ergebnisse, die für sich
              <br />
              <span className="text-[#9BCCED]">sprechen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie, wie Zinzino-Produkte das Leben unserer Kunden positiv verändert haben.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => {
              const testimonialName = safeString(testimonial.name)
              const testimonialRole = safeString(testimonial.role)
              const testimonialText = safeString(testimonial.text)
              const testimonialProduct = safeString(testimonial.product)
              const testimonialAvatar = safeString(testimonial.avatar)
              const testimonialRating = testimonial.rating || 0

              return (
                <div
                  key={testimonial.id || index}
                  className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                    index === 1 ? "lg:transform lg:scale-105 lg:shadow-2xl" : ""
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-[#9BCCED]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Quote className="h-6 w-6 text-[#9BCCED]" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonialRating ? "text-[#FFA500] fill-[#FFA500]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed">"{testimonialText}"</blockquote>

                  {/* Product Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#968C83]/10 px-3 py-1 rounded-full mb-6">
                    <span className="text-xs font-medium text-[#968C83] uppercase tracking-wide">
                      {testimonialProduct}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9BCCED] to-[#968C83] rounded-2xl flex items-center justify-center text-white font-bold">
                      {testimonialAvatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonialName}</div>
                      <div className="text-sm text-gray-500">{testimonialRole}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-1">Mehr Erfolgsgeschichten</h3>
                <p className="text-sm text-gray-500">Entdecke weitere Kundenerfahrungen</p>
              </div>
              <Button asChild className="bg-[#9BCCED] hover:bg-[#7FB3E3] rounded-xl font-semibold">
                <Link href="/erfahrungsberichte">
                  Alle lesen
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
