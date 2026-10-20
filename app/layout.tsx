import localFont from 'next/font/local';
import "./globals.css";
import Header from '@/ui/header'
import type { Metadata } from 'next';
import { siteUrl, siteName, siteDescription } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | The meaning behind games`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  applicationName: siteName,

  authors: [{ name: 'SUR: https://www.madebysur.com'}],

  openGraph: {
    type: 'website',
    siteName,
    title: siteName,
    description: siteDescription,
    locale: 'en_US'
  },

  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    },
  }
}

const jetBrains = localFont({
  src: "../fonts/JetBrainsMono.woff2",
  variable: "--font-jetbrains-mono"
});

const inter = localFont({
  src: "../fonts/InterSans.woff2",
  variable: "--font-inter-sans"
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}