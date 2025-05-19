"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  lowQualitySrc?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  lowQualitySrc,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(
    lowQualitySrc ||
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgNjAwIDUwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==",
  )

  useEffect(() => {
    // Preload the image
    const img = new Image()
    img.src = src as string
    img.onload = () => {
      setCurrentSrc(src as string)
      setIsLoaded(true)
    }
  }, [src])

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      <Image
        src={currentSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-60"}`}
        {...props}
      />
    </div>
  )
}
