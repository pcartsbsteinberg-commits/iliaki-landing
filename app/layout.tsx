import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SmoothScroll from '@/components/smooth-scroll'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Iliaki - Soluciones Fotovoltaicas Premium | Instalación de paneles solares',
  description: 'Iliaki transforma tu hogar con energía fotovoltaica. Ahorra hasta el 70% en tu factura eléctrica con nuestros sistemas certificados y asegura tu ahorro energético residencial.',
  keywords: 'Instalación de paneles solares, Energía fotovoltaica Iliaki, Ahorro energético residencial, energia solar, paneles solares, instalacion solar, ahorro energia, energia renovable, Iliaki',
  generator: 'next',
  openGraph: {
    title: 'Iliaki - Soluciones Fotovoltaicas Premium',
    description: 'Instalación de paneles solares en tu hogar. Logra un verdadero ahorro energético residencial.',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Iliaki Instalación Fotovoltaica Premium' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Iliaki - Soluciones Fotovoltaicas Premium",
    "image": "https://iliaki.com.ar/og-image.jpg",
    "description": "Instalación de paneles solares y soluciones de energía fotovoltaica Iliaki para el ahorro energético residencial.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressCountry": "AR"
    },
    "telephone": "+54 11 5555-0000",
    "email": "contacto@iliaki.com.ar",
    "url": "https://iliaki.com.ar",
    "offers": {
      "@type": "Service",
      "name": "Instalación de paneles solares"
    }
  }

  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
