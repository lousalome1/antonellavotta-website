import Image from "next/image";

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border">

      {/* MOBILE (fino a md): foto sopra, testo sotto, mai sovrapposti */}
      <div className="md:hidden">
        <div className="relative h-[52vh] w-full">
          <Image
            src="/hero-banner.png"
            alt="Avvocata Antonella Votta"
            fill
            priority
            className="object-cover object-[78%_25%]"
          />
        </div>

        <div className="bg-[#faf8f4] px-6 py-12">
          <span className="text-xs uppercase tracking-[0.30em] text-accent">
            AVVOCATA
          </span>

          <h1 className="mt-6 font-serif leading-[0.9] tracking-tight text-foreground text-4xl">
            Antonella
            <br />
            Votta
          </h1>

          <div className="mt-8 flex items-center gap-5">
            <div className="h-px w-24 bg-accent" />
            <div className="h-2.5 w-2.5 rotate-45 bg-accent" />
            <div className="h-px w-24 bg-accent" />
          </div>

          <p className="mt-8 max-w-[30rem] text-lg leading-9 text-foreground/85">
            Sono un'avvocata penalista, specializzata in reati informatici.
            Assisto inoltre imprese e cittadini in materia di consumatori,
            privacy e nuove tecnologie.
          </p>

          <div className="mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-none border border-accent bg-accent px-7 py-3 text-sm font-medium tracking-[0.08em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5af58] hover:shadow-lg"
            >
              Richiedi una consulenza
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP (da md in su): layout attuale, foto di sfondo con testo sovrapposto */}
      <div className="hidden md:block">
        <div className="absolute inset-0">
          <Image
            src="/hero-banner.png"
            alt="Avvocata Antonella Votta"
            fill
            priority
            className="object-cover object-[73%_38%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f4]/82 via-[#faf8f4]/60 via-[62%] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl items-center px-10">
          <div className="max-w-[34rem]">
            <span className="text-xs uppercase tracking-[0.30em] text-accent">
              AVVOCATA
            </span>

            <h1 className="mt-6 font-serif leading-[0.9] tracking-tight text-foreground text-[3rem] lg:text-[4.4rem]">
              Antonella
              <br />
              Votta
            </h1>

            <div className="mt-8 flex items-center gap-5">
              <div className="h-px w-24 bg-accent" />
              <div className="h-2.5 w-2.5 rotate-45 bg-accent" />
              <div className="h-px w-24 bg-accent" />
            </div>

            <p className="mt-8 max-w-[30rem] text-lg leading-9 text-foreground/85">
              Sono un'avvocata penalista, specializzata in reati informatici.
              Assisto inoltre imprese e cittadini in materia di consumatori,
              privacy e nuove tecnologie.
            </p>

            <div className="mt-12">
              
                href="#contact"
                className="inline-flex items-center justify-center rounded-none border border-accent bg-accent px-7 py-3 text-sm font-medium tracking-[0.08em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d5af58] hover:shadow-lg"
              >
                Richiedi una consulenza
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}