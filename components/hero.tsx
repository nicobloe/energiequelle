import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="section pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Zinzino</h1>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Deine Gesundheit, deine Chance!</h2>
            <p className="text-xl mb-8">Wir unterstützen dich dabei.</p>
            <p className="text-lg mb-8">
              Entdecke die Premium-Nahrungsergänzungsmittel von Zinzino für ein ausgewogenes Leben. Als offizieller
              Partner biete ich dir Zugang zu hochwertigen Produkten für deine Gesundheit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="cta-button">
                <Link href="https://www.zinzino.com/2020232820" target="_blank" rel="noopener noreferrer">
                  Produkte entdecken
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#2aaa8a] text-[#2aaa8a]">
                <Link
                  href="https://www.zinzino.com/2020232820/ch/de-de/explore/balance-concept/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/zinzino-products-hero.png"
              alt="Zinzino BalanceOil+ und BalanceTest mit natürlichen Zutaten"
              width={600}
              height={500}
              className="rounded-lg shadow-lg object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md hidden md:block">
              <div className="text-[#2aaa8a] font-bold text-lg">Natürlich. Wissenschaftlich. Effektiv.</div>
              <div className="text-gray-600 text-sm">Premium-Nahrungsergänzung aus Norwegen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
