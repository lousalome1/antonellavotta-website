"use client"

import { useEffect, useState } from "react"

const links = [
  { label: "Chi sono", href: "#about" },
  { label: "Aree di attività", href: "#practice" },
  { label: "Contatti", href: "#contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-sm"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-lg tracking-tight text-foreground">
            Antonella Votta
          </span>

          <span
            className="hidden h-1.5 w-1.5 rounded-full bg-accent sm:inline-block"
            aria-hidden="true"
          />
        </a>

        <ul className="flex items-center gap-8 text-[15px] font-medium tracking-[0.01em] text-foreground">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  relative
                  transition-all
                  duration-200
                  hover:text-accent
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-px
                  after:w-0
                  after:bg-accent
                  after:transition-all
                  after:duration-200
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}