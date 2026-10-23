
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-icon">✿</span>
        Paradise Nursery
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}
