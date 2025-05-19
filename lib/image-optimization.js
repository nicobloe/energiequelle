// Bildoptimierungsfunktionen

/**
 * Optimiert Bildgrößen basierend auf dem Viewport
 * @param {string} src - Bildquelle
 * @param {number} width - Bildbreite
 * @param {number} quality - Bildqualität (1-100)
 * @returns {string} - Optimierte Bildquelle
 */
export function imageOptimizer(src, width, quality) {
  // Wenn es sich um ein externes Bild handelt, verwenden Sie die Next.js Image Optimization API
  if (src.startsWith("http")) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`
  }

  // Für lokale Bilder
  return src
}

/**
 * Generiert responsive Bildgrößen für srcSet
 * @param {string} src - Bildquelle
 * @param {Array<number>} sizes - Array von Bildbreiten
 * @param {number} quality - Bildqualität (1-100)
 * @returns {string} - srcSet-String
 */
export function generateSrcSet(src, sizes = [640, 750, 828, 1080, 1200, 1920], quality = 75) {
  return sizes
    .map((size) => {
      const optimizedSrc = imageOptimizer(src, size, quality)
      return `${optimizedSrc} ${size}w`
    })
    .join(", ")
}

/**
 * Generiert ein Blur-Placeholder für Bilder
 * @param {string} src - Bildquelle
 * @returns {Promise<string>} - Data URL für Blur-Placeholder
 */
export async function generateBlurPlaceholder(src) {
  // In einer echten Implementierung würde hier ein Bild verarbeitet werden
  // Für dieses Beispiel geben wir einen einfachen Platzhalter zurück
  return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
}
