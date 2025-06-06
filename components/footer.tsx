import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Image src="/images/Logo_svg.svg" alt="energiequelle Logo" width={180} height={72} className="mb-4" />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Produkte</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/omega-supplements/300000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9BCCED]"
                >
                  BalanceOil+
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/immune-system-supplements/301000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9BCCED]"
                >
                  Viva+
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/gut-health-supplements/301390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9BCCED]"
                >
                  ZinoBiotic+
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/skin-nutrition/302800/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9BCCED]"
                >
                  Collagen Boozt
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.zinzino.com/shop/2020232820/CH/de-DE/products/shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9BCCED]"
                >
                  Alle Produkte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Über uns</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-[#9BCCED]">
                  Unsere Geschichte
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.zinzino.com/site/CH/de-DE/join-zinzino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9BCCED]"
                >
                  Zinzino Partner werden
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#9BCCED]">
                  Wissenschaft & Forschung
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-[#9BCCED]">
                  Nachhaltigkeit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-[#9BCCED]">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-[#9BCCED]">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-[#9BCCED]">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Gesundheitsthemen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/gut-health" className="text-gray-400 hover:text-[#9BCCED]">
                  Darmgesundheit
                </Link>
              </li>
              <li>
                <Link href="/blog/omega3-aging" className="text-gray-400 hover:text-[#9BCCED]">
                  Omega-3 & Alterung
                </Link>
              </li>
              <li>
                <Link href="/stoffwechselkur" className="text-gray-400 hover:text-[#9BCCED]">
                  Stoffwechselkur
                </Link>
              </li>
              <li>
                <Link href="/erfahrungsberichte" className="text-gray-400 hover:text-[#9BCCED]">
                  Erfahrungsberichte
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} energiequelle. Alle Rechte vorbehalten. Offizieller Zinzino Partner.</p>
        </div>
      </div>
    </footer>
  )
}
