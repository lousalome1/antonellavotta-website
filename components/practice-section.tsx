const macroAreas = [
  {
    number: "01",
    title: "Diritto penale",
    description:
      "Difesa in tutte le fasi del procedimento penale, dalle indagini preliminari al dibattimento, con particolare esperienza nei reati informatici e in quelli commessi tramite tecnologie digitali. Assistenza a imprese ed enti nei procedimenti per responsabilità amministrativa da reato (D.Lgs. 231/2001). Supporto alle vittime di violenza di genere, stalking e violenza digitale, inclusa la diffusione non consensuale di materiale intimo.",
  },
  {
    number: "02",
    title: "Tutela dei consumatori",
    description:
      "Gestione di reclami e procedure di conciliazione con operatori TLC, energetici, postali e bancari, anche presso Corecom e le Autorità di settore (ARERA, AGCM, AGCOM). Coordinamento nazionale delle attività di conciliazione per un'associazione di consumatori. Formazione alle aziende su compliance nei rapporti di consumo e su tematiche ESG, incluso il contrasto al greenwashing.",
  },
  {
    number: "03",
    title: "Privacy e nuove tecnologie",
    description:
      "Consulenza su adeguamento al GDPR, gestione di data breach e rapporti con il Garante per la Protezione dei Dati Personali. Assistenza a imprese su intelligenza artificiale, blockchain e responsabilità legata all'uso di piattaforme digitali.",
  },
]

export function PracticeSection() {
  return (
    <section
      id="practice"
      className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40"
    >
      <div className="grid gap-10 md:grid-cols-12">

        <div className="md:col-span-3 lg:col-span-2">
          <h2 className="text-xs uppercase tracking-[0.30em] text-accent">
            Aree di attività
          </h2>
        </div>

        <div className="border-t border-border md:col-span-9 lg:col-span-10">

          {macroAreas.map((area) => (

            <article
              key={area.number}
              className="grid grid-cols-12 gap-y-8 border-b border-border py-20 md:py-24"
            >

              <div className="col-span-2">
                <span className="font-serif text-5xl leading-none text-accent/70 lg:text-6xl">
                  {area.number}
                </span>
              </div>

              <div className="col-span-10">

                <h3 className="font-serif text-2xl leading-tight tracking-tight text-foreground md:text-3xl">
                  {area.title}
                </h3>

                <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-foreground font-medium">
                  {area.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}