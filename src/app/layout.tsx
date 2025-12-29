import { AppShell } from '@/components/app-shell'
import { AuthProvider } from '@/components/auth/auth-provider'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petal - AI Customer Service for E-commerce Stores | 24/7 Support Automation',
  description: 'AI-powered customer service built for e-commerce. Automate 40% of support inquiries across web, email, and WhatsApp. Self-evolving knowledge base. No per-seat fees. Free trial.',
  keywords: ['AI customer service', 'e-commerce support automation', 'Shopify customer service', 'AI chatbot for online stores', 'self-evolving knowledge base', 'multi-channel support', 'WhatsApp business support'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  )
}
