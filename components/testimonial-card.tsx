"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { StarIcon, Quote } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    text: string
    rating: number
    product: string
    location: string
    imageUrl: string
  }
}

// Funktion, um die Initialen einer Person zu erhalten (als Fallback)
function getInitials(name: string) {
  const safeName = name || "Unknown"
  return safeName
    .split(" ")
    .map((part) => (part || "").charAt(0))
    .join("")
    .toUpperCase()
}

// Funktion, um eine Hintergrundfarbe basierend auf der ID zu generieren (als Fallback)
function getBackgroundColor(id: number) {
  const colors = ["#2aaa8a", "#38C0B2", "#3CD8C8", "#FFA500", "#FF8C00"]
  return colors[id % colors.length] || "#2aaa8a"
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.onerror = null

    // Erstelle einen farbigen Kreis mit Initialen als Fallback
    const canvas = document.createElement("canvas")
    canvas.width = 400
    canvas.height = 400
    const ctx = canvas.getContext("2d")

    if (ctx) {
      // Hintergrund
      ctx.fillStyle = getBackgroundColor(testimonial.id || 0)
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Text
      ctx.fillStyle = "#FFFFFF"
      ctx.font = "bold 160px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(getInitials(testimonial.name || ""), canvas.width / 2, canvas.height / 2)

      // Setze das Canvas als Bildquelle
      target.src = canvas.toDataURL("image/png")
    }
  }

  const safeName = testimonial.name || ""
  const safeText = testimonial.text || ""
  const safeProduct = testimonial.product || ""
  const safeLocation = testimonial.location || ""
  const safeImageUrl = testimonial.imageUrl || "/placeholder.svg"
  const safeRating = testimonial.rating || 0

  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-5 w-5 ${i < safeRating ? "text-[#FFA500] fill-[#FFA500]" : "text-gray-300"}`}
            />
          ))}
        </div>
        <div className="mb-4 h-48 overflow-hidden rounded-lg bg-gray-50">
          <img
            src={safeImageUrl || "/placeholder.svg"}
            alt={`${safeName} aus ${safeLocation}`}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
        <div className="flex items-center mb-4">
          <Quote className="h-8 w-8 text-[#2aaa8a] mr-2" />
          <div>
            <h3 className="font-bold">{safeName}</h3>
            <p className="text-sm text-gray-500">
              Produkt: {safeProduct} • {safeLocation}
            </p>
          </div>
        </div>
        <p className="text-gray-700 italic">"{safeText}"</p>
      </CardContent>
    </Card>
  )
}
