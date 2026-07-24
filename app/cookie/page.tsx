export default function CookiePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">

      <h1 className="font-serif text-5xl tracking-tight text-foreground">
        Cookie Policy
      </h1>

      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-accent">
        Ultimo aggiornamento · 24 luglio 2026
      </p>

      <p className="mt-10 text-lg leading-9 text-foreground/80">
        La presente Cookie Policy descrive l'utilizzo dei cookie e di tecnologie
        analoghe da parte del sito web dell'
        <strong> Avv. Antonietta Votta</strong>, che esercita la professione
        anche con il nome di <strong>Antonella Votta</strong>.
      </p>

      {/* COSA SONO */}

      <section className="mt-14 rounded-xl border border-border bg-[#faf8f4] p-8">

        <h2 className="font-serif text-2xl text-foreground">
          Cosa sono i cookie
        </h2>

        <p className="mt-6 leading-8 text-foreground/80">
          I cookie sono piccoli file di testo che possono essere salvati sul
          dispositivo dell'utente durante la navigazione di un sito web.
          Consentono il corretto funzionamento della piattaforma e, a seconda
          della loro tipologia, possono svolgere diverse funzioni tecniche.
        </p>

      </section>

      {/* COOKIE UTILIZZATI */}

      <section className="mt-16">

        <h2 className="font-serif text-2xl">
          Cookie utilizzati
        </h2>

        <p className="mt-5 leading-8 text-foreground/80">
          Questo sito utilizza esclusivamente <strong>cookie tecnici</strong>,
          strettamente necessari al funzionamento della piattaforma, alla
          sicurezza del servizio e alla corretta erogazione dei contenuti.
        </p>

        <p className="mt-5 leading-8 text-foreground/80">
          Il sito <strong>non utilizza cookie di profilazione</strong>,
          cookie pubblicitari, strumenti di marketing né sistemi di analisi del
          traffico quali Google Analytics o servizi analoghi.
        </p>

        <p className="mt-5 leading-8 text-foreground/80">
          Ai sensi della normativa vigente, l'utilizzo dei soli cookie tecnici
          non richiede il consenso preventivo dell'utente.
        </p>

      </section>

      {/* SERVIZI TERZI */}

      <section className="mt-16">

        <h2 className="font-serif text-2xl">
          Servizi di terze parti
        </h2>

        <p className="mt-5 leading-8 text-foreground/80">
          Il sito è ospitato sulla piattaforma <strong>Vercel Inc.</strong>,
          fornitore di servizi di hosting con sede negli Stati Uniti.
        </p>

        <p className="mt-5 leading-8 text-foreground/80">
          Per l'erogazione del servizio, Vercel può utilizzare cookie tecnici o
          tecnologie equivalenti strettamente necessarie al funzionamento,
          alla sicurezza dell'infrastruttura e alla gestione tecnica della
          piattaforma.
        </p>

      </section>

      {/* GESTIONE */}

      <section className="mt-16">

        <h2 className="font-serif text-2xl">
          Gestione dei cookie
        </h2>

        <p className="mt-5 leading-8 text-foreground/80">
          L'utente può gestire, limitare o eliminare i cookie attraverso le
          impostazioni del proprio browser.
        </p>

        <p className="mt-5 leading-8 text-foreground/80">
          La disabilitazione dei cookie tecnici potrebbe compromettere il
          corretto funzionamento del sito.
        </p>

      </section>

      {/* CONTATTI */}

      <section className="mt-20 rounded-xl border border-accent/30 bg-accent/5 p-8">

        <h2 className="font-serif text-2xl">
          Contatti
        </h2>

        <p className="mt-5 leading-8 text-foreground/80">
          Per qualsiasi informazione relativa alla presente Cookie Policy è
          possibile contattare il Titolare ai seguenti recapiti:
        </p>

        <div className="mt-6 space-y-2 text-foreground/80">

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:avvocato@antonellavotta.com"
              className="text-accent hover:underline"
            >
              avvocato@antonellavotta.com
            </a>
          </p>

          <p>
            <strong>PEC:</strong>{" "}
            <a
              href="mailto:antoniettavotta@ordineavvocatiroma.org"
              className="text-accent hover:underline"
            >
              antoniettavotta@ordineavvocatiroma.org
            </a>
          </p>

        </div>

      </section>

    </main>
  );
}