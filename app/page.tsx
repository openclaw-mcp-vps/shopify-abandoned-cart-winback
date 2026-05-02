export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Cart Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Recover Lost Revenue with{' '}
          <span className="text-[#58a6ff]">AI-Powered</span> Cart Winback
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically send personalized email sequences to shoppers who abandoned their carts.
          Dynamic discounts, smart product recommendations, and urgency triggers — all on autopilot.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Carts — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No contracts. Cancel anytime. 7-day free trial.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '15–25%', label: 'Average cart recovery rate' },
            { stat: '3-Email', label: 'AI-personalized sequence' },
            { stat: '< 5 min', label: 'Shopify setup time' },
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{item.stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            ['Shopify Webhook Integration', 'Instant cart abandonment detection via native Shopify webhooks.'],
            ['OpenAI Personalization', 'Each email is uniquely written by AI using cart contents and customer history.'],
            ['Dynamic Discount Engine', 'Offer escalating discounts only when needed to protect margins.'],
            ['Urgency & Scarcity Triggers', 'Low-stock alerts and countdown timers drive immediate action.'],
          ].map(([title, desc]) => (
            <li key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Growth</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · billed monthly</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited abandoned cart emails',
              'AI-personalized 3-email sequences',
              'Dynamic discount engine',
              'Shopify webhook integration',
              'Real-time recovery dashboard',
              '7-day free trial',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              'How does it connect to my Shopify store?',
              'After subscribing, you install our Shopify app in one click. It registers the cart abandonment webhook automatically — no code required.',
            ],
            [
              'Will the emails look generic or spammy?',
              'No. OpenAI generates each email using the specific products in the cart, the customer\'s name, and purchase history, so every message feels personal and relevant.',
            ],
            [
              'What if I want to cancel?',
              'Cancel anytime from your billing dashboard. No lock-in, no cancellation fees. Your 7-day trial is completely free with no charge until it ends.',
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} CartWinback. All rights reserved.
      </footer>
    </main>
  )
}
