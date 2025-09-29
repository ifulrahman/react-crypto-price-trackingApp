import React from 'react'
import './FAQ.css'

const faqs = [
  {
    q: 'What is Ful’s Crypto Tracking App?',
    a: (
      <>
        Ful’s Crypto is a clean, minimalist dashboard to track live cryptocurrency
        prices, market caps, volumes, and supplies. It’s designed to be fast,
        readable, and friendly for both beginners and pros.
      </>
    )
  },
  {
    q: 'Where does the data come from?',
    a: (
      <>
        Prices and market data are sourced from public providers such as CoinGecko.
        Minor delays may occur depending on your internet connection and the upstream provider.
      </>
    )
  },
  {
    q: 'What is cryptocurrency?',
    a: (
      <>
        Cryptocurrency is a form of digital money that uses cryptography for security.
        Unlike traditional currencies, it runs on decentralized networks—most commonly
        blockchains—that are not controlled by a single authority like a bank or government.
      </>
    )
  },
  {
    q: 'What is blockchain?',
    a: (
      <>
        Blockchain is a distributed digital ledger that records transactions across many
        computers in a way that makes them secure, transparent, and nearly impossible to alter.
        It’s the foundation technology behind Bitcoin, Ethereum, and most cryptocurrencies.
      </>
    )
  },
  {
    q: 'What do the table columns mean?',
    a: (
      <ul>
        <li><b>Price</b> – Latest trading price in the selected currency.</li>
        <li><b>24H Change</b> – Percent change in the last 24 hours.</li>
        <li><b>Market Cap</b> – Price × circulating supply, showing total value.</li>
        <li><b>Volume (24h)</b> – Total trading activity in the past 24 hours.</li>
        <li><b>Circulating Supply</b> – Coins currently available on the market.</li>
      </ul>
    )
  },
  {
    q: 'Why does price change so fast?',
    a: (
      <>
        Crypto markets operate 24/7 without breaks and are highly volatile.
        Prices change quickly due to supply/demand dynamics, investor sentiment,
        global news, and even social media trends.
      </>
    )
  },
  {
    q: 'What is the difference between Bitcoin and altcoins?',
    a: (
      <>
        <b>Bitcoin (BTC)</b> is the first and largest cryptocurrency by market cap.
        <b>Altcoins</b> (alternative coins) are all other cryptos—like Ethereum,
        Solana, and Ripple. Some aim to improve Bitcoin, others introduce
        completely new features.
      </>
    )
  },
  {
    q: 'Is this an exchange? Can I buy or sell here?',
    a: (
      <>
        No. Ful’s Crypto App is for tracking and insights only. You cannot buy,
        sell, or store assets here. Think of it as your crypto dashboard, not a wallet.
      </>
    )
  },
  {
    q: 'Which currencies are supported?',
    a: (
      <>
        You can switch between USD, EUR, GBP, and IDR. More fiat currencies
        may be added in the future.
      </>
    )
  },
  {
    q: 'Can I create an account?',
    a: (
      <>
        Not yet. Sign-up is currently disabled. You’ll see a notice:
        <i> “You cannot create an account at this time. Please try again later.”</i>
      </>
    )
  },
  {
    q: 'How can beginners get started with crypto safely?',
    a: (
      <>
        Start small. Learn about Bitcoin and Ethereum first, use only trusted exchanges,
        enable two-factor authentication, and never invest more than you’re willing to lose.
        Education is your best investment.
      </>
    )
  },
  {
    q: 'How do I report an issue or share feedback?',
    a: (
      <>
        Use the Contact link in the navbar (it scrolls down to the footer). 
        We’re always open to suggestions, bug reports, and ideas.
      </>
    )
  }
]

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq__container">
        <h1 className="faq__title">FAQ</h1>
        <p className="faq__subtitle">
          Your essential guide to Ful’s Crypto App and the world of crypto.
        </p>

        <div className="faq__list">
          {faqs.map((item, idx) => (
            <details key={idx} className="faq__item">
              <summary>{item.q}</summary>
              <div className="faq__answer">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
