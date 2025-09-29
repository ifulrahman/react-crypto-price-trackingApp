import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {

  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  // === pagination ===
  const PER_PAGE = 20;
  const [page, setPage] = useState(1);

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === '') {
      setDisplayCoin(allCoin);
      setPage(1);
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
    setPage(1); // reset ke halaman 1 setelah search
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
    setPage(1);
  }, [allCoin]);

  // data untuk halaman aktif
  const totalPages = Math.ceil(displayCoin.length / PER_PAGE) || 1;
  const start = (page - 1) * PER_PAGE;
  const currentPageCoins = displayCoin.slice(start, start + PER_PAGE);

  // generate nomor halaman (maks 5 tombol)
  const pageWindow = 5;
  let startPage = Math.max(1, page - Math.floor(pageWindow / 2));
  let endPage = Math.min(totalPages, startPage + pageWindow - 1);
  startPage = Math.max(1, endPage - pageWindow + 1);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // === formatters (aman-null) ===
  const fmtNum = (v, opts) => (v || v === 0) ? v.toLocaleString(undefined, opts) : '—';
  const fmtCur = (v) => (v || v === 0) ? `${currency.symbol} ${fmtNum(v)}` : '—';

  return (
    <div className='home'>
      <div className="hero">
        <h1>Ful’s Crypto <br />Tracking App</h1>
        <p>Your gateway to the crypto economy. From Bitcoin to altcoins,
          Ful’s Crypto App delivers live prices, market trends, and
          performance analytics—everything you need, all in one place.
        </p>

        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list='coinList'
            value={input}
            type="text"
            placeholder='Search crypto...'
            required
          />

          <datalist id='coinList'>
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button type='submit'>Search</button>
        </form>
      </div>

      <div className="crypto-table">
        {/* header */}
        <div className="table-layout table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
          <p className='volume'>Volume(24h)</p>
          <p className='supply'>Circulating Supply</p>
        </div>

        {/* rows */}
        {
          currentPageCoins.map((item, index) => (
            <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
              <p>{item.market_cap_rank ?? '—'}</p>

              <div>
                <img src={item.image} alt="" />
                <p>{`${item.name} - ${item.symbol ?? ''}`}</p>
              </div>

              <p>{fmtCur(item.current_price)}</p>

              {(() => {
                const pct = item.price_change_percentage_24h;
                const cls = pct > 0 ? 'green' : 'red';
                return (
                  <p className={cls}>
                    {pct == null ? '—' : (Math.floor(pct * 100) / 100).toFixed(2)}
                  </p>
                );
              })()}

              <p className='market-cap'>{fmtCur(item.market_cap)}</p>

              <p className='volume'>{fmtCur(item.total_volume)}</p>

              <p className='supply'>
                {item.circulating_supply != null
                  ? `${fmtNum(item.circulating_supply, { maximumFractionDigits: 2 })} ${item.symbol?.toUpperCase() ?? ''}`
                  : '—'}
              </p>
            </Link>
          ))
        }

        {/* pagination */}
        <div className="pagination-wrap">
          <div className="pagination-info">
            Showing {start + 1}-{Math.min(start + PER_PAGE, displayCoin.length)} of {displayCoin.length}
          </div>

          <div className="pagination">
            <button
              className="page-btn"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
            >Prev</button>

            {pageNumbers.map((num) => (
              <button
                key={num}
                className={`page-btn ${num === page ? 'active' : ''}`}
                onClick={() => goToPage(num)}
              >
                {num}
              </button>
            ))}

            <button
              className="page-btn"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
