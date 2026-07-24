import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.png"
          alt="Avvocata Antonella Votta"
          fill
          priority
          className="
            object-cover
            object-[82%_38%]
            md:object-[73%_38%]
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f4]/78 via-[#faf8f4]/42 via-[55%] to-transparent" />
      </div>

      {/* Contenuto */}
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl items-center px-6 md:px-10">
        <div className="max-w-[34rem]">

          {/* Professione */}
          <span className="text-xs uppercase tracking-[0.30em] text-accent">
            AVVOCATA
          </span>

          {/* Titolo */}
          <h1 className="mt-6 font-serif leading-[0.9] tracking-tight text-foreground text-4xl md:text-[3rem] lg:text-[4.4rem]">
            Antonella
            <br />
            Votta
          </h1>

          {/* Divisore */}
          <div className="mt-8 flex items-center gap-5">
            <div className="h-px w-24 bg-accent" />
            <div className="h-2.5 w-2.5 rotate-45 bg-accent" />
            <div className="h-px w-24 bg-accent" />
          </div>

          {/* Testo */}
          <p className="mt-8 max-w-[30rem] text-lg leading-9 text-foreground/85">
            Sono un'avvocata penalista, specializzata in reati informatici.
            Assisto inoltre imprese e cittadini in materia di consumatori,
            privacy e nuove tecnologie.
          </p>

          {/* Bottone */}
          <div className="mt-12">
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-none
                border
                border-accent
                bg-accent
                px-7
                py-3
                text-sm
                font-medium
                tracking-[0.08em]
                text-primary
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#d5af58]
                hover:shadow-lg
              "
            >
              Richiedi una consulenza
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}