import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { site } from "@/content/site";
import { buildStructuredData } from "@/lib/structuredData";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Reserved for small technical labels — section eyebrows, stage numbers, meta. */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["500", "600"],
  display: "swap",
});

const title = "KVASol | Renewable Energy, Electrical Engineering & EPC Solutions";
const description =
  "KVASol delivers professional solar PV, BESS, electrical engineering, EPC, construction and O&M solutions for residential, commercial, industrial and infrastructure projects in Pakistan.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  /* Canonical URL — update if the site moves to a different domain or path. */
  alternates: { canonical: "/" },
  keywords: [
    "solar EPC company in Pakistan",
    "renewable energy engineering Pakistan",
    "solar PV system design",
    "Battery Energy Storage Systems Pakistan",
    "electrical engineering services",
    "EPC project execution",
    "solar operations and maintenance",
    "commercial and industrial solar",
    "net metering Pakistan",
    "telecom power systems",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Engineering, Procurement and Construction",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.legalName,
    title,
    description,
    images: [
      {
        /* Replace with final brand-approved social card artwork when available. */
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KVASol — solar, BESS, telecom and infrastructure engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${plexSans.variable} ${plexMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()) }}
        />
      </body>
    </html>
  );
}
