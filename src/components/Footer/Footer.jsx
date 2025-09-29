import React from 'react'
import './Footer.css'
import logoBrand from '../../assets/logo.png'
import googlePlayBadge from '../../assets/play-stores.png'
import appStoreBadge from '../../assets/app-stores.png'

const Footer = () => {

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">

        {/* ===== TOP ROW ===== */}
        <div className="footer__top">

          {/* Column 1: Brand + Description + Badges */}
          <div className="footer__col footer__brand">
            <img
              className="footer__logo"
              src={logoBrand}
              alt="Ful"
              onError={(e)=>{ e.currentTarget.style.display='none' }}
            />

            <p className="footer__desc">
              Ful’s crypto price tracking app.  
              Real-time prices, simple charts, and elegant design — built for crypto traders and enthusiasts.
            </p>

            <div className="footer__badges">
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <img src={googlePlayBadge} alt="Get it on Google Play" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src={appStoreBadge} alt="Download on the App Store" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <a className="footer__link footer__link--accent" href="mailto:syaifulmuhammad02@gmail.com">
              syaifulmuhammad02@gmail.com
            </a>

            <h4 className="footer__heading mt-16">My Page</h4>
            <a
              className="footer__link footer__link--accent"
              href="https://ifulrahman.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              ifulrahman.github.io
            </a>

            <div className="footer__social">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/muhammad-syaiful-rahman/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.06c.53-1 1.82-2.2 3.75-2.2 4 0 4.74 2.63 4.74 6v10h-4v-8.9c0-2.12 0-4.84-2.95-4.84-2.95 0-3.4 2.3-3.4 4.68V24h-4V8z"/></svg>
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com/iful_rahman/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.26 2.3.43.6.24 1 .52 1.4.96.43.43.72.86.96 1.45.17.37.37 1.03.43 2.25.07 1.32.07 1.72.07 4.94s0 3.62-.07 4.94c-.06 1.22-.26 1.88-.43 2.25-.24.59-.53 1.02-.96 1.45-.43.44-.86.72-1.45.96-.37.17-1.03.37-2.25.43-1.32.07-1.72.07-4.94.07s-3.62 0-4.94-.07c-1.22-.06-1.88-.26-2.25-.43-.59-.24-1.02-.53-1.45-.96-.44-.43-.72-.86-.96-1.45-.17-.37-.37-1.03-.43-2.25C2.2 15.62 2.2 15.22 2.2 12s0-3.62.07-4.94c.06-1.22.26-1.88.43-2.25.24-.59.53-1.02.96-1.45.43-.44.86-.72 1.45-.96.37-.17 1.03-.37 2.25-.43C8.38 2.2 8.78 2.2 12 2.2m0-2.2C8.74 0 8.31 0 7 .07 5.69.13 4.78.35 4.03.66c-.77.31-1.43.73-2.08 1.39C1.3 2.7.88 3.36.57 4.12.26 4.88.04 5.8 0 7.1-.07 8.41-.07 8.84-.07 12s0 3.59.07 4.9c.04 1.3.26 2.22.57 2.98.31.76.73 1.42 1.38 2.07.65.65 1.31 1.08 2.07 1.38.76.31 1.68.54 2.98.57C8.41 24.07 8.84 24.07 12 24.07s3.59 0 4.9-.07c1.3-.04 2.22-.26 2.98-.57.76-.31 1.42-.73 2.07-1.38.65-.65 1.08-1.31 1.38-2.07.31-.76.54-1.68.57-2.98.07-1.31.07-1.74.07-4.9s0-3.59-.07-4.9c-.04-1.3-.26-2.22-.57-2.98-.31-.76-.73-1.42-1.38-2.07C21.3 1.39 20.64.97 19.88.66c-.76-.31-1.68-.54-2.98-.57C15.59 0 15.16 0 12 0z"/><path fill="currentColor" d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84m0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4m6.35-10.86a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="footer__bottom">
          <p>© 2025 — Ful's Crypto Price Tracking App - Iful Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
