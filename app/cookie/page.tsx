export default function CookiePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 md:px-10">
      <h1 className="font-serif text-5xl tracking-tight text-foreground">
        Cookie Policy
      </h1>

      <p className="mt-6 text-muted-foreground">
        Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
      </p>

      <div className="mt-16 space-y-14">

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Cosa sono i cookie
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            I cookie sono piccoli file di testo che i siti web salvano sul
            dispositivo dell'utente durante la navigazione. Servono a garantire
            il corretto funzionamento del sito e, in alcuni casi, a raccogliere
            informazioni statistiche sulle visite.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Cookie utilizzati
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            Questo sito utilizza esclusivamente cookie tecnici necessari al
            funzionamento della piattaforma e alla sicurezza del servizio.
          </p>

          <p className="mt-6 leading-8 text-foreground">
            Non vengono utilizzati cookie di profilazione né strumenti destinati
            a tracciare le abitudini di navigazione degli utenti per finalità
            pubblicitarie.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Servizi di terze parti
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            Il sito è ospitato sulla piattaforma Vercel, che può utilizzare
            cookie tecnici e dati di navigazione strettamente necessari al
            funzionamento dell'infrastruttura e alla sicurezza del servizio.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Gestione dei cookie
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            L'utente può in qualsiasi momento limitare, bloccare o eliminare i
            cookie attraverso le impostazioni del proprio browser. La
            disattivazione dei cookie tecnici potrebbe compromettere il corretto
            funzionamento del sito.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Contatti
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            Per qualsiasi informazione relativa alla presente Cookie Policy è
            possibile contattare il Titolare del trattamento ai recapiti
            indicati nella Privacy Policy.
          </p>
        </section>

      </div>
    </main>
  )
}