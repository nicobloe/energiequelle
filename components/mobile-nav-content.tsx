"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

// Typen für die Props
interface NavItem {
  name: string
  href?: string
  sectionHref?: string
  isDropdown: boolean
  items?: {
    name: string
    href: string
    sectionHref: string
    description?: string
  }[]
}

interface MobileNavContentProps {
  navItems: NavItem[]
  isHomePage: boolean
  activeSection: string
}

export default function MobileNavContent({
  navItems = [],
  isHomePage = false,
  activeSection = "",
}: MobileNavContentProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    if (!name) return

    if (openDropdown === name) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(name)
    }
  }

  // Sichere Funktion zum Abrufen des aktuellen Pfads
  const getCurrentPath = () => {
    if (typeof window !== "undefined" && window.location) {
      return window.location.pathname || ""
    }
    return ""
  }

  const currentPath = getCurrentPath()

  return (
    <div className="flex flex-col space-y-4 mt-8">
      {navItems.map((item) => {
        const itemName = item.name || ""
        const itemHref = item.href || "#"
        const itemSectionHref = item.sectionHref || ""

        return item.isDropdown ? (
          <div key={itemName} className="space-y-2">
            <button
              onClick={() => toggleDropdown(itemName)}
              className="flex items-center justify-between w-full text-lg font-medium"
            >
              <span>{itemName}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openDropdown === itemName ? "rotate-180" : "",
                )}
              />
            </button>
            <div
              className={cn(
                "pl-4 border-l-2 border-gray-200 space-y-3 overflow-hidden transition-all duration-300",
                openDropdown === itemName ? "max-h-96" : "max-h-0",
              )}
            >
              {(item.items || []).map((subItem) => {
                const subItemName = subItem.name || ""
                const subItemHref = subItem.href || "#"
                const subItemSectionHref = subItem.sectionHref || ""
                const subItemDescription = subItem.description || ""

                return (
                  <Link
                    key={subItemName}
                    href={subItemHref}
                    className={cn(
                      "block transition-colors",
                      (isHomePage && activeSection === subItemSectionHref) || currentPath === subItemHref
                        ? "text-[#9BCCED] font-semibold"
                        : "hover:text-[#9BCCED]",
                    )}
                  >
                    <div>{subItemName}</div>
                    {subItemDescription && <div className="text-xs text-gray-500 mt-0.5">{subItemDescription}</div>}
                  </Link>
                )
              })}
            </div>
          </div>
        ) : (
          <Link
            key={itemName}
            href={itemHref}
            className={cn(
              "text-lg font-medium transition-colors",
              (isHomePage && activeSection === itemSectionHref) || currentPath === itemHref
                ? "text-[#9BCCED] font-semibold"
                : "hover:text-[#9BCCED]",
            )}
          >
            {itemName}
          </Link>
        )
      })}
      <Button
        asChild
        className="bg-[#9BCCED] hover:bg-[#7FB3E3] text-white font-bold py-2 px-4 rounded w-full mt-4 flex items-center justify-center gap-1.5"
      >
        <Link href="https://www.zinzino.com/shop/site/CH/de-DE/products" target="_blank" rel="noopener noreferrer">
          Shop besuchen
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </Button>
    </div>
  )
}
