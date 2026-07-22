import { SiteNav } from "../components/site-nav"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { PracticeSection } from "../components/practice-section"
import { ContactSection } from "../components/contact-section"
import { SiteFooter } from "../components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
