import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antonellavotta.com"),

  title: {
    default: "Avv. Antonella Votta | Avvocata penalista a Roma",
    template: "%s | Avv. Antonella Votta",
  },

  description:
    "Avvocata penalista del Foro di Roma. Assistenza in diritto penale, reati informatici, privacy, diritto dei consumatori e nuove tecnologie.",

  keywords: [
    "avvocato penalista Roma",
    "avvocata Roma",
    "reati informatici",
    "privacy",
    "GDPR",
    "diritto penale",
    "diritto dei consumatori",
    "nuove tecnologie",
    "Antonella Votta",
  ],

  authors: [
    {
      name: "Avv. Antonella Votta",
    },
  ],

  creator: "Avv. Antonella Votta",

  openGraph: {
    title: "Avv. Antonella Votta",
    description:
      "Avvocata penalista del Foro di Roma. Reati informatici, privacy, diritto dei consumatori e nuove tecnologie.",
    url: "https://www.antonellavotta.com",
    siteName: "Avv. Antonella Votta",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1600,
        height: 900,
        alt: "Avv. Antonella Votta",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Avv. Antonella Votta",
    description:
      "Avvocata penalista del Foro di Roma. Reati informatici, privacy e nuove tecnologie.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-icon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FAF7F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`bg-background ${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Script
          id="schema-lawyer"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Attorney",
              name: "Avv. Antonella Votta",
              alternateName: "Avv. Antonietta Votta",
              url: "https://www.antonellavotta.com",
              image: "https://www.antonellavotta.com/og-image.png",
              telephone: "+393899936011",
              email: "avvocato@antonellavotta.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Clelia 45",
                addressLocality: "Roma",
                postalCode: "00181",
                addressCountry: "IT",
              },
              areaServed: "Italia",
              knowsAbout: [
                "Diritto penale",
                "Reati informatici",
                "Responsabilità degli enti",
                "Privacy",
                "Nuove tecnologie",
                "Diritto dei consumatori",
              ],
            }),
          }}
        />

        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}