import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Image
              src="/images/energiequelle-logo-transparent.png"
              alt="energiequelle Logo"
              width={180}
              height={72}
              className="mb-4 brightness-0 invert"
            />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Produkte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produkte" className="text-gray-400 hover:text-[#2aaa8a]">
                  BalanceOil+
                </Link>
              </li>
              <li>
                <Link href="/produkte" className="text-gray-400 hover:text-[#2aaa8a]">
                  Viva+
                </Link>
              </li>
              <li>
                <Link href="/produkte" className="text-gray-400 hover:text-[#2aaa8a]">
                  ZinoBiotic+
                </Link>
              </li>
              <li>
                <Link href="/produkte" className="text-gray-400 hover:text-[#2aaa8a]">
                  Collagen Boozt
                </Link>
              </li>
              <li>
                <Link href="/produkte" className="text-gray-400 hover:text-[#2aaa8a]">
                  Alle Produkte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Über uns</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-[#2aaa8a]">
                  Unsere Geschichte
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.zinzino.com/site/CH/de-DE/join-zinzino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#2aaa8a]"
                >
                  Zinzino Partner werden
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#2aaa8a]">
                  Wissenschaft & Forschung
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-[#2aaa8a]">
                  Nachhaltigkeit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-[#2aaa8a]">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-[#2aaa8a]">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-[#2aaa8a]">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Gesundheitsthemen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/gut-health" className="text-gray-400 hover:text-[#2aaa8a]">
                  Darmgesundheit
                </Link>
              </li>
              <li>
                <Link href="/blog/omega3-aging" className="text-gray-400 hover:text-[#2aaa8a]">
                  Omega-3 & Alterung
                </Link>
              </li>
              <li>
                <Link href="/stoffwechselkur" className="text-gray-400 hover:text-[#2aaa8a]">
                  Stoffwechselkur
                </Link>
              </li>
              <li>
                <Link href="/erfahrungsberichte" className="text-gray-400 hover:text-[#2aaa8a]">
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
