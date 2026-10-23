
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">A BREATH OF FRESH AIR</p>
            <h1>Bring Nature<br />Into Your Home</h1>
            <p className="hero-description">
              Discover beautiful indoor plants and create a greener,
              calmer, more welcoming space.
            </p>
            <Link to="/plants" className="primary-button hero-button">
              Get Started
            </Link>
          </div>
        </section>

        <AboutUs />

        <section className="home-cta">
          <p className="eyebrow">YOUR GREEN JOURNEY STARTS HERE</p>
          <h2>Find the perfect plant for your space.</h2>
          <Link to="/plants" className="primary-button">
            Explore Plants
          </Link>
        </section>
      </main>

      <footer className="site-footer">
        <p>Paradise Nursery — Grow a little happiness every day.</p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </HashRouter>
  );
}
