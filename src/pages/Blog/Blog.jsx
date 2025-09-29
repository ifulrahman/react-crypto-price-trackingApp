import React from 'react'
import './Blog.css'
import blog from '../../assets/blog.png'
import blog2 from '../../assets/blog-2.png'
import blog3 from '../../assets/blog-3.png'

const posts = [
  {
    title: 'What Is Bitcoin? A Beginner’s Guide',
    excerpt: 'Understand the basics of Bitcoin—how it works and why it matters.',
    url: 'https://www.investopedia.com/terms/b/bitcoin.asp',
    img: blog
  },
  {
    title: 'Market Cap vs. Fully Diluted Valuation',
    excerpt: 'Learn the difference and how to read valuations in crypto.',
    url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwivr__Q5_uPAxWT1DgGHckSE2sQFnoECBsQAQ&url=https%3A%2F%2Fkanga.exchange%2Funiversity%2Fen%2Fcourses%2Fintermediate-course%2Flessons%2F42-market-cap-versus-fully-diluted-market-cap-the-most-important-differences-you-should-know%2F&usg=AOvVaw3RqZ_TzF3LzrIj4FnbafJ4&opi=89978449',
    img: blog2
  },
  {
    title: 'Stablecoins Explained',
    excerpt: 'Why stablecoins exist and how they maintain their peg.',
    url: 'https://www.google.com/aclk?sa=L&ai=DChsSEwj4tI7v5_uPAxXyDoMDHdNWAH4YACICCAEQABoCc2Y&co=1&gclid=CjwKCAjwuePGBhBZEiwAIGCVS8VcgmzKSzSC5XR-hXBOmbchgkfprbZ18PhbpQoP1Fe0PcovfMOGShoC5vEQAvD_BwE&cid=CAASN-Rojz8nzdEzPfw3VgSvN3Sdh2vvcAsp_PKtUovI0Ha-Wp9UhgH3olaa0LFNkBp4vcMotsDzwlQ&cce=2&sig=AOD64_14TgaWh-yEcu30m_DEwnv3oKbSbw&q&adurl&ved=2ahUKEwiHmIfv5_uPAxVrxzgGHYp7NRQQ0Qx6BAgSEAE',
    img: blog3
  }
]

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__container">
        <h1 className="blog__title">Blog</h1>
        <p className="blog__subtitle">Curated reads on crypto—clean, concise, and worthwhile.</p>

        <div className="blog__grid">
          {posts.map((p, idx) => (
            <article className="blog__card" key={idx}>
              <div className="blog__thumb" style={{backgroundImage:`url(${p.img})`}} />
              <div className="blog__body">
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <a className="blog__link" href={p.url} target="_blank" rel="noopener noreferrer">
                  Read Article →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
