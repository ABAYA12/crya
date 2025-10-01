import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Concerned Rising Youths Africa (CRYA)',
    template: '%s | CRYA'
  },
  description: 'Concerned Rising Youths Africa (CRYA) is a youth-led initiative created by Ghanaian youth for the Ghanaian and African youth. We exist to serve as a platform to raise and catapult the voices of African youth to the national and international stage.',
  keywords: ['CRYA', 'African Youth', 'Ghana', 'NGO', 'Youth Empowerment', 'Education', 'Democracy', 'Governance'],
  authors: [{ name: 'CRYA Team' }],
  creator: 'Concerned Rising Youths Africa',
  publisher: 'CRYA',
  metadataBase: new URL('https://crya.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crya.org',
    siteName: 'Concerned Rising Youths Africa',
    title: 'Concerned Rising Youths Africa (CRYA)',
    description: 'Empowering African youth through education, advocacy, and purposeful engagement for a better future.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Concerned Rising Youths Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concerned Rising Youths Africa (CRYA)',
    description: 'Empowering African youth through education, advocacy, and purposeful engagement for a better future.',
    creator: '@concerned_africa',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}