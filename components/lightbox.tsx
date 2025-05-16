"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface LightboxProps {
  isOpen: boolean
  imageUrl: string
  altText: string
  onClose: () => void
}

export default function Lightbox({ isOpen, imageUrl, altText, onClose }: LightboxProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  // Verhindert Scrollen des Hintergrunds, wenn Lightbox geöffnet ist
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Animation beim Öffnen/Schliessen
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    } else {
      setIsAnimating(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 transition-opacity duration-300 lightbox-overlay"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Schliessen</span>
        </button>

        <div className="relative w-full h-full flex items-center justify-center p-4 bg-white">
          <img src={imageUrl || "/placeholder.svg"} alt={altText} className="max-w-full max-h-[80vh] object-contain" />
        </div>

        <div className="p-4 bg-white">
          <h3 className="text-xl font-bold">{altText}</h3>
        </div>
      </div>
    </div>
  )
}
