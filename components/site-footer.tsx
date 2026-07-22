export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground md:flex-row md:px-10">

        <p>© {new Date().getFullYear()} Avv.Antonietta Votta</p>

        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy Policy
          </a>

          <a
            href="/cookie"
            className="transition-colors hover:text-foreground"
          >
            Cookie Policy
          </a>
        </div>

      </div>
    </footer>
  )
}