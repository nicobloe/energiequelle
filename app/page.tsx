import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Stoffwechselkur from "@/components/stoffwechselkur"
import BlogPreview from "@/components/blog-preview"
import Events from "@/components/events"
import AboutUs from "@/components/about-us"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Stoffwechselkur />
      <AboutUs />
      <BlogPreview />
      <Testimonials />
      <Events />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
