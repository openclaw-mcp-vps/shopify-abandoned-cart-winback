import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CartWinback — AI-Powered Abandoned Cart Recovery for Shopify',
  description: 'Automatically recover abandoned carts with personalized AI email sequences. Dynamic pricing, product recommendations, and urgency triggers for Shopify stores doing $10K+ monthly revenue.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="05319c03-36ed-4a76-a0f0-dc93e2b58b66"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
