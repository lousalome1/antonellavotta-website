export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-10 lg:gap-12">

        <div className="md:col-span-3 lg:col-span-2">
          <h2 className="text-xs uppercase tracking-[0.22em] text-accent">
            Chi sono
          </h2>
        </div>

        <div className="md:col-span-9 lg:col-span-10">

          <p className="max-w-3xl font-serif text-xl leading-[1.6] tracking-tight text-foreground md:text-2xl lg:text-[1.7rem]">
            Il mio percorso professionale si muove tra aula, associazionismo e 
            formazione. Da oltre dieci anni mi occupo di diritto penale, con 
            un'attenzione specifica ai reati che nascono dal digitale; 
            parallelamente ho costruito una competenza approfondita su 
            protezione dei dati, intelligenza artificiale e nuove tecnologie, 
            attraverso percorsi di specializzazione universitaria e 
            aggiornamento costante.
          </p>

          <div className="mt-20 flex items-start gap-8 md:mt-24 md:gap-10">

            <div
              className="mt-1 w-px self-stretch bg-accent"
              aria-hidden="true"
            />

            <p className="max-w-3xl font-serif text-lg leading-[1.75] text-foreground md:text-xl lg:text-[1.4rem]">
              Sono inoltre Responsabile del Settore Privacy e Nuove Tecnologie 
              e Coordinatrice nazionale del settore conciliazioni presso 
              un'associazione di consumatori iscritta al CNCU, dove mi occupo 
              di ADR per i consumatori e di formazione alle aziende in materia 
              di compliance.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}