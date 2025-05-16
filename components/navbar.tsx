"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
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
        { name: "Stoffwechselkur", href: "/stoffwechselkur", sectionHref: "#stoffwechselkur" },
        { name: "Darmgesundheit", href: "/blog/gut-health", sectionHref: "#blog" },
      ],
    },
    {
      name: "Über uns",
      href: "/ueber-uns",
      sectionHref: "#persoenlich",
      isDropdown: false,
    },
    {
      name: "Erfahrungen",
      isDropdown: true,
      items: [
        { name: "Erfahrungsberichte", href: "/erfahrungsberichte", sectionHref: "#testimonials" },
        { name: "Blog", href: "/blog", sectionHref: "#blog" },
      ],
    },
    {
      name: "Kontakt",
      isDropdown: true,
      items: [
        { name: "Kontaktformular", href: "/contact", sectionHref: "#contact" },
        { name: "Events", href: "/events", sectionHref: "#events" },
        { name: "Newsletter", href: "/newsletter", sectionHref: "#newsletter" },
      ],
    },
  ]

  // Bestimme, ob wir auf der Startseite sind
  const isHomePage = pathname === "/" || pathname === ""

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" onClick={handleLogoClick} className="flex items-center">
          <div className="h-16 flex items-center">
            <Image
              src="/images/energiequelle-logo-new.svg"
              alt="energiequelle Logo"
              width={160}
              height={64}
              priority
              className="h-auto max-h-12 w-auto object-contain"
              quality={100}
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) =>
            item.isDropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center text-lg font-medium transition-colors hover:text-[#2aaa8a] focus:outline-none">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {item.items?.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} className="p-0">
                      <Link
                        href={isHomePage ? subItem.sectionHref : subItem.href}
                        onClick={(e) =>
                          isHomePage && subItem.sectionHref.startsWith("#")
                            ? scrollToSection(e, subItem.sectionHref)
                            : null
                        }
                        className="w-full px-3 py-2 text-sm hover:text-[#2aaa8a]"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={isHomePage ? item.sectionHref : item.href}
                onClick={(e) =>
                  isHomePage && item.sectionHref?.startsWith("#") ? scrollToSection(e, item.sectionHref) : null
                }
                className={`text-lg font-medium transition-colors ${
                  (isHomePage && activeSection === item.sectionHref) || pathname === item.href
                    ? "text-[#2aaa8a] font-semibold"
                    : "hover:text-[#2aaa8a]"
                }`}
              >
                {item.name}
              </Link>
            ),
          )}
          <Button asChild className="bg-[#2aaa8a] hover:bg-[#239980] text-white font-bold py-2 px-4 rounded">
            <Link href="https://www.zinzino.com/shop/site/CH/de-DE/products" target="_blank" rel="noopener noreferrer">
              Shop besuchen
            </Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menü öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) =>
                item.isDropdown ? (
                  <div key={item.name} className="space-y-2">
                    <div className="font-medium text-lg">{item.name}</div>
                    <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={isHomePage ? subItem.sectionHref : subItem.href}
                          onClick={(e) => {
                            if (isHomePage && subItem.sectionHref.startsWith("#")) {
                              scrollToSection(e, subItem.sectionHref)
                              setIsOpen(false)
                            }
                          }}
                          className={`block text-base transition-colors ${
                            (isHomePage && activeSection === subItem.sectionHref) || pathname === subItem.href
                              ? "text-[#2aaa8a] font-semibold"
                              : "hover:text-[#2aaa8a]"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={isHomePage ? item.sectionHref : item.href}
                    onClick={(e) => {
                      if (isHomePage && item.sectionHref?.startsWith("#")) {
                        scrollToSection(e, item.sectionHref)
                        setIsOpen(false)
                      }
                    }}
                    className={`text-lg font-medium transition-colors ${
                      (isHomePage && activeSection === item.sectionHref) || pathname === item.href
                        ? "text-[#2aaa8a] font-semibold"
                        : "hover:text-[#2aaa8a]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Button
                asChild
                className="bg-[#2aaa8a] hover:bg-[#239980] text-white font-bold py-2 px-4 rounded w-full mt-4"
              >
                <Link
                  href="https://www.zinzino.com/shop/site/CH/de-DE/products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop besuchen
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
