"use client"

import type React from "react"

import { useState, useEffect, lazy, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// Lazy-load der Sheet-Komponente für mobile Navigation
const MobileNavContent = lazy(() => import("./mobile-nav-content"))

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMobileNavLoaded, setIsMobileNavLoaded] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Funktion zum sanften Scrollen zu einer Sektion (nur auf der Startseite)
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId.replace("#", ""))
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // 100px Offset für die Navbar
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  // Funktion zum Scrollen nach oben oder zur Startseite navigieren
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Wenn wir auf der Startseite sind, scrollen wir nach oben
    if (pathname === "/" || pathname === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      // Wenn wir auf einer anderen Seite sind, navigieren wir zur Startseite
      router.push("/")
    }
  }

  // Aktive Sektion beim Scrollen erkennen (nur auf der Startseite)
  useEffect(() => {
    if (pathname !== "/" && pathname !== "") return

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop - 150) {
          currentSection = `#${section.id}`
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Dropdown-Menü öffnen/schließen
  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(name)
    }
  }

  // Dropdown-Menü schließen, wenn außerhalb geklickt wird
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".dropdown-trigger") && !target.closest(".dropdown-menu")) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Lazy-load der mobilen Navigation
  const handleMobileNavOpen = () => {
    setIsMobileNavLoaded(true)
    setIsOpen(true)
  }

  // Optimierte Menüstruktur mit Dropdown-Kategorien
  const navItems = [
    {
      name: "Produkte",
      href: "/produkte",
      sectionHref: "#products",
      isDropdown: false,
    },
    {
      name: "Gesundheit",
      isDropdown: true,
      items: [
        {
          name: "Stoffwechselkur",
          href: "/stoffwechselkur",
          sectionHref: "#stoffwechselkur",
          description: "Ganzheitliches Regenerations- und Präventionskonzept",
        },
        {
          name: "Darmgesundheit",
          href: "/blog/gut-health",
          sectionHref: "#blog",
          description: "Alles über die Bedeutung eines gesunden Darms",
        },
      ],
    },
    {
      name: "Über mich",
      href: "/ueber-uns",
      sectionHref: "#persoenlich",
      isDropdown: false,
    },
    {
      name: "Erfahrungen",
      isDropdown: true,
      items: [
        {
          name: "Erfahrungsberichte",
          href: "/erfahrungsberichte",
          sectionHref: "#testimonials",
          description: "Erfahrungen unserer Kunden mit Zinzino-Produkten",
        },
        {
          name: "Blog",
          href: "/blog",
          sectionHref: "#blog",
          description: "Informative Artikel zu Gesundheitsthemen",
        },
      ],
    },
    {
      name: "Kontakt",
      isDropdown: true,
      items: [
        {
          name: "Kontaktformular",
          href: "/contact",
          sectionHref: "#contact",
          description: "Nehmen Sie direkt Kontakt mit uns auf",
        },
        {
          name: "Events",
          href: "/events",
          sectionHref: "#events",
          description: "Informationen zu unseren Veranstaltungen",
        },
        {
          name: "Newsletter",
          href: "/newsletter",
          sectionHref: "#newsletter",
          description: "Abonnieren Sie unseren Newsletter",
        },
      ],
    },
  ]

  // Bestimme, ob wir auf der Startseite sind
  const isHomePage = pathname === "/" || pathname === ""

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#968C83]">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" onClick={handleLogoClick} className="flex items-center">
          <div className="h-14 flex items-center">
            <Image
              src="/images/Logo_svg.svg"
              alt="energiequelle Logo"
              width={160}
              height={64}
              priority
              className="h-12 w-auto object-contain"
              quality={100}
              unoptimized
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.isDropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={cn(
                    "dropdown-trigger flex items-center text-lg font-medium transition-colors focus:outline-none text-white",
                    openDropdown === item.name ? "text-[#9BCCED]" : "hover:text-[#9BCCED]",
                  )}
                  aria-expanded={openDropdown === item.name}
                  aria-haspopup="true"
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      openDropdown === item.name ? "rotate-180" : "",
                    )}
                  />
                </button>
                {openDropdown === item.name && (
                  <div
                    className="dropdown-menu absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50"
                    onMouseLeave={() => setTimeout(() => setOpenDropdown(null), 200)}
                  >
                    <div className="py-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => {
                            setOpenDropdown(null)
                          }}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="font-medium text-gray-900 group-hover:text-[#9BCCED] transition-colors">
                            {subItem.name}
                          </div>
                          {subItem.description && (
                            <div className="text-sm text-gray-500 mt-0.5">{subItem.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {}}
                className={cn(
                  "text-lg font-medium transition-colors relative text-white",
                  (isHomePage && activeSection === item.sectionHref) || pathname === item.href
                    ? "text-[#9BCCED] font-semibold"
                    : "hover:text-[#9BCCED]",
                )}
              >
                {item.name}
                {((isHomePage && activeSection === item.sectionHref) || pathname === item.href) && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-[#9BCCED] rounded-full" />
                )}
              </Link>
            ),
          )}
          <Button
            asChild
            className="bg-[#9BCCED] hover:bg-[#7FB3E3] text-white font-bold py-2 px-4 rounded transition-all duration-200 hover:shadow-md flex items-center gap-1.5"
          >
            <Link href="https://www.zinzino.com/shop/site/CH/de-DE/products" target="_blank" rel="noopener noreferrer">
              Shop besuchen
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleMobileNavOpen}
              className="relative h-10 w-10 rounded-lg border border-gray-200 bg-white hover:bg-[#9BCCED] hover:border-[#9BCCED] transition-all duration-200 group shadow-sm"
            >
              <Menu className="h-5 w-5 text-black group-hover:text-white transition-colors duration-200" />
              <span className="sr-only">Menü öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            {isMobileNavLoaded ? (
              <Suspense fallback={<div>Wird geladen...</div>}>
                <MobileNavContent navItems={navItems} isHomePage={isHomePage} activeSection={activeSection} />
              </Suspense>
            ) : (
              <div className="flex flex-col space-y-4 mt-8">
                <div className="animate-pulse h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="animate-pulse h-8 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="animate-pulse h-8 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div className="animate-pulse h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="animate-pulse h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
