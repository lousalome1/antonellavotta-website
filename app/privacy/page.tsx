export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 md:px-10">
      <h1 className="font-serif text-5xl tracking-tight text-foreground">
        Privacy Policy
      </h1>

      <p className="mt-6 text-muted-foreground">
        Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
      </p>

      <div className="mt-16 space-y-14">

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Titolare del trattamento
          </h2>

          <div className="mt-6 space-y-2 leading-8">
            <p>
              Avv. <strong>Antonietta Votta</strong>, che esercita la professione
              anche con il nome di <strong>Antonella Votta</strong>.
            </p>

            <p>Studio: Via Clelia 45, 00181 Roma (RM)</p>

            <p>Email: avvocato@antonellavotta.com</p>

            <p>PEC: antoniettavotta@ordineavvocatiroma.org</p>

            <p>Telefono: +39 389 993 6011</p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Tipologia dei dati trattati
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            La semplice consultazione del sito può comportare il trattamento di
            dati tecnici necessari al funzionamento della piattaforma, quali
            indirizzo IP, informazioni sul browser, dispositivo utilizzato,
            data e ora della visita e dati di navigazione.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Finalità del trattamento
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            I dati sono trattati esclusivamente per garantire il corretto
            funzionamento del sito, assicurarne la sicurezza, prevenire utilizzi
            illeciti e ottenere statistiche aggregate sulle visite mediante gli
            strumenti messi a disposizione dalla piattaforma di hosting.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Base giuridica
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            Il trattamento è effettuato ai sensi dell'art. 6, par. 1, lett. f)
            del Regolamento (UE) 2016/679 (GDPR), sulla base del legittimo
            interesse del Titolare a garantire la sicurezza, la stabilità e il
            corretto funzionamento del sito internet.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Modalità del trattamento
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            I dati sono trattati con strumenti elettronici e adottando adeguate
            misure tecniche ed organizzative volte a garantirne la sicurezza,
            l'integrità e la riservatezza.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Conservazione dei dati
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            I dati sono conservati per il tempo strettamente necessario al
            perseguimento delle finalità sopra indicate e nel rispetto degli
            obblighi di legge eventualmente applicabili.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Comunicazione dei dati
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            I dati non sono diffusi. Possono essere trattati da fornitori di
            servizi strettamente connessi al funzionamento del sito, quali il
            provider di hosting Vercel, nominati ove necessario responsabili del
            trattamento ai sensi dell'art. 28 GDPR.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Diritti dell'interessato
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            L'interessato può esercitare in qualsiasi momento i diritti previsti
            dagli articoli 15 e seguenti del Regolamento (UE) 2016/679,
            compresi il diritto di accesso, rettifica, cancellazione,
            limitazione del trattamento, opposizione e reclamo al Garante per
            la Protezione dei Dati Personali.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-foreground">
            Contatti
          </h2>

          <p className="mt-6 leading-8 text-foreground">
            Per ogni richiesta relativa al trattamento dei dati personali è
            possibile scrivere a{" "}
            <strong>avvocato@antonellavotta.com</strong> oppure tramite PEC a{" "}
            <strong>antoniettavotta@ordineavvocatiroma.org</strong>.
          </p>
        </section>

      </div>
    </main>
  )
}