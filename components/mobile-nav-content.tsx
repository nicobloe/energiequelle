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

export default function MobileNavContent({ navItems, isHomePage, activeSection }: MobileNavContentProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(name)
    }
  }

  return (
    <div className="flex flex-col space-y-4 mt-8">
      {navItems.map((item) =>
        item.isDropdown ? (
          <div key={item.name} className="space-y-2">
            <button
              onClick={() => toggleDropdown(item.name)}
              className="flex items-center justify-between w-full text-lg font-medium"
            >
              <span>{item.name}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openDropdown === item.name ? "rotate-180" : "",
                )}
              />
            </button>
            <div
              className={cn(
                "pl-4 border-l-2 border-gray-200 space-y-3 overflow-hidden transition-all duration-300",
                openDropdown === item.name ? "max-h-96" : "max-h-0",
              )}
            >
              {item.items?.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className={cn(
                    "block transition-colors",
                    (isHomePage && activeSection === subItem.sectionHref) || location.pathname === subItem.href
                      ? "text-[#38C0B2] font-semibold"
                      : "hover:text-[#38C0B2]",
                  )}
                >
                  <div>{subItem.name}</div>
                  {subItem.description && <div className="text-xs text-gray-500 mt-0.5">{subItem.description}</div>}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={item.name}
            href={item.href || "#"}
            className={cn(
              "text-lg font-medium transition-colors",
              (isHomePage && activeSection === item.sectionHref) || location.pathname === item.href
                ? "text-[#38C0B2] font-semibold"
                : "hover:text-[#38C0B2]",
            )}
          >
            {item.name}
          </Link>
        ),
      )}
      <Button
        asChild
        className="bg-[#38C0B2] hover:bg-[#3CD8C8] text-white font-bold py-2 px-4 rounded w-full mt-4 flex items-center justify-center gap-1.5"
      >
        <Link href="https://www.zinzino.com/shop/site/CH/de-DE/products" target="_blank" rel="noopener noreferrer">
          Shop besuchen
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </Button>
    </div>
  )
}
