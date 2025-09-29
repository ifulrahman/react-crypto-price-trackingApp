import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-2.png'
import { CoinContext } from '../../context/CoinContext'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext)
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'eur': setCurrency({ name: 'eur', symbol: '€' }); break;
      case 'idr': setCurrency({ name: 'idr', symbol: 'Rp' }); break;
      case 'gbp': setCurrency({ name: 'gbp', symbol: '£' }); break;
      case 'usd':
      default:   setCurrency({ name: 'usd', symbol: '$' }); break;
    }
  }

  // Smooth-scroll to footer from anywhere
  const handleContactClick = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // tutup menu setelah klik
  }

  return (
    <div className='navbar'>
      <Link to='/' className="logo-link">
        <img src={logo} alt="Ful's Crypto" className='logo'/>
      </Link>

      {/* desktop nav */}
      <ul className="nav-menu">
        <Link to='/' className="nav-link"><li>Home</li></Link>
        <Link to='/faq' className="nav-link"><li>FAQ</li></Link>
        <Link to='/blog' className="nav-link"><li>Blog</li></Link>
        <a href="#footer" onClick={handleContactClick} className="nav-link"><li>Contact</li></a>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler} className="nav-select">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="idr">IDR</option>
        </select>

        <Link to="/signup">
          <button className="nav-cta">Sign Up</button>
        </Link>

        {/* hamburger (mobile only) */}
        <button
          className={`hamburger ${isOpen ? 'is-open' : ''}`}
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to='/' className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to='/faq' className="mobile-link" onClick={() => setIsOpen(false)}>FAQ</Link>
        <Link to='/blog' className="mobile-link" onClick={() => setIsOpen(false)}>Blog</Link>
        <a href="#footer" className="mobile-link" onClick={handleContactClick}>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
