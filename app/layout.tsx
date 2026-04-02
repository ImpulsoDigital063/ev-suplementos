import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evsuplementosinjetaveis.com"),
  title: "EV Suplementos Injetáveis — Soroterapia em Palmas-TO",
  description:
    "Protocolos de soroterapia IV e intramuscular desenvolvidos pela farmacêutica Erlane Vieira (CRF 4033-TO). Atendimento domiciliar em Palmas–TO. Avaliação gratuita.",
  openGraph: {
    title: "EV Suplementos Injetáveis — Soroterapia em Palmas-TO",
    description:
      "Protocolos personalizados de soroterapia com atendimento domiciliar. Farmacêutica certificada CRF 4033-TO. Agende sua avaliação gratuita.",
    url: "https://evsuplementosinjetaveis.com",
    siteName: "EV Suplementos Injetáveis",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/erlane.jpg",
        width: 1200,
        height: 630,
        alt: "Erlane Vieira — Farmacêutica CRF 4033-TO | EV Suplementos Injetáveis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV Suplementos Injetáveis — Soroterapia em Palmas-TO",
    description:
      "Protocolos personalizados de soroterapia com atendimento domiciliar em Palmas–TO.",
    images: ["/erlane.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
