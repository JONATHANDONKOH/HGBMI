import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { DonationSticky } from '@/components/DonationSticky'
import './globals.css'

export const metadata: Metadata = {
  title: 'HGBMI CHURCH WEBSITE',
  description: 'Hour of Grace Believers Ministries International',
  generator: 'HGBMI',
  icons: {
    icon: '/church_loog-removebg-preview.png'
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical tag tells Google that hgbmi.org is the official domain */}
        <link rel="canonical" href="https://hgbmi.org" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="alternate" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" href="/church_loog-removebg-preview.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Big+Shoulders+Inline:opsz,wght@10..72,100..900&family=Bitter:ital,wght@0,100..900;1,100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Dancing+Script:wght@400..700&family=Gidole&family=Lilita+One&family=Oswald:wght@200..700&family=Pattaya&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=SUSE+Mono:ital,wght@0,100..800;1,100..800&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <DonationSticky />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
