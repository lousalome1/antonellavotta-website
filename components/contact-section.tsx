export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <h2 className="text-balance font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Parliamone.
          </h2>

          <p className="mt-6 max-w-sm text-pretty leading-relaxed text-foreground font-medium">
            Se desidera un confronto sul suo caso o maggiori informazioni, può
            contattarmi telefonicamente o via e-mail. Ricevo esclusivamente su
            appuntamento, anche da remoto.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <dl className="divide-y divide-border border-y border-border">
            <div className="flex items-baseline justify-between gap-4 py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                Telefono
              </dt>
              <dd>
                <a
                  href="tel:+393899936011"
                  className="text-foreground transition-colors hover:text-burgundy"
                >
                  +39 389 993 6011
                </a>
              </dd>
            </div>

            <div className="flex items-baseline justify-between gap-4 py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:avvocato@antonellavotta.com"
                  className="text-foreground transition-colors hover:text-burgundy"
                >
                  avvocato@antonellavotta.com
                </a>
              </dd>
            </div>

            <div className="flex items-baseline justify-between gap-4 py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                Contatto rapido
              </dt>
              <dd>
                <a
                  href="https://wa.me/393899936011?text=Buongiorno%20Avvocata%20Votta,%20vorrei%20richiedere%20una%20consulenza."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-burgundy"
                >
                  Scrivi su WhatsApp
                </a>
              </dd>
            </div>

            <div className="flex items-baseline justify-between gap-4 py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">
                LinkedIn
              </dt>
              <dd>
                <a
                  href="https://www.linkedin.com/in/antonella-votta-a05714297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-burgundy"
                >
                  Antonella Votta
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}