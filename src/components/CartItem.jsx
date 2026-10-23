
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from '../redux/CartSlice';
import Navbar from './Navbar';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <main className="cart-page page-container">
        <header className="page-heading">
          <p className="eyebrow">YOUR SELECTED GREENS</p>
          <h1>Shopping Cart</h1>
        </header>

        {items.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon">🌿</div>
            <h2>Your cart is waiting for some green!</h2>
            <p>Explore our collection and find your next favourite plant.</p>
            <Link className="primary-button button-link" to="/plants">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img
                    src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=400&q=80`}
                    alt={item.name}
                  />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>Unit price: ₹{item.price}</p>
                    <p className="item-subtotal">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>

                    <div className="quantity-controls">
                      <button
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>

                      <button
                        className="remove-button"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              <button
                className="text-button"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </section>

            <aside className="order-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summary-row">
                <span>Total Amount</span>
                <strong>₹{totalAmount}</strong>
              </div>

              <button
                className="primary-button checkout-button"
                onClick={() => window.alert('Coming Soon!')}
              >
                Checkout
              </button>

              <Link className="continue-link" to="/plants">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}
