
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import Navbar from './Navbar';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Air-Purifying Plants',
    price: 299,
    description: 'A hardy, low-maintenance plant suited to indoor spaces.',
    image: 'photo-1593691509543-c55fb32e5cee',
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Air-Purifying Plants',
    price: 399,
    description: 'Elegant green foliage with distinctive white flowers.',
    image: 'photo-1593482892290-f54927ae2b3a',
  },
  {
    id: 3,
    name: 'Areca Palm',
    category: 'Air-Purifying Plants',
    price: 499,
    description: 'A tropical palm that adds a lush look to your home.',
    image: 'photo-1512428813834-c702c7702b78',
  },
  {
    id: 4,
    name: 'Spider Plant',
    category: 'Air-Purifying Plants',
    price: 249,
    description: 'An adaptable plant with arching, striped leaves.',
    image: 'photo-1501004318641-b39e6451bec6',
  },
  {
    id: 5,
    name: 'Golden Pothos',
    category: 'Air-Purifying Plants',
    price: 279,
    description: 'A trailing vine that looks lovely on shelves.',
    image: 'photo-1497250681960-ef046c08a56e',
  },
  {
    id: 6,
    name: 'Rubber Plant',
    category: 'Air-Purifying Plants',
    price: 449,
    description: 'Bold, glossy leaves make a striking indoor accent.',
    image: 'photo-1509423350716-97f9360b4e09',
  },
  {
    id: 7,
    name: 'Lavender',
    category: 'Aromatic Plants',
    price: 299,
    description: 'A fragrant herb known for its purple flower spikes.',
    image: 'photo-1499002238440-d264edd596ec',
  },
  {
    id: 8,
    name: 'Rosemary',
    category: 'Aromatic Plants',
    price: 199,
    description: 'An aromatic herb often used in home cooking.',
    image: 'photo-1515586000433-45406d8e6662',
  },
  {
    id: 9,
    name: 'Mint',
    category: 'Aromatic Plants',
    price: 149,
    description: 'A refreshing herb with bright, fragrant leaves.',
    image: 'photo-1628556270448-4d4e4148e1b1',
  },
  {
    id: 10,
    name: 'Basil',
    category: 'Aromatic Plants',
    price: 179,
    description: 'A popular culinary herb with aromatic foliage.',
    image: 'photo-1618375569909-3c8616cf7733',
  },
  {
    id: 11,
    name: 'Lemongrass',
    category: 'Aromatic Plants',
    price: 229,
    description: 'A fresh-scented grass often used in cooking.',
    image: 'photo-1530968464166-7a1861cbaf9f',
  },
  {
    id: 12,
    name: 'Thyme',
    category: 'Aromatic Plants',
    price: 189,
    description: 'A compact herb with fragrant leaves.',
    image: 'photo-1466692476868-aef1dfb1e735',
  },
  {
    id: 13,
    name: 'Aloe Vera',
    category: 'Medicinal Plants',
    price: 199,
    description: 'A succulent with thick leaves and easy-care needs.',
    image: 'photo-1509423350716-97f9360b4e09',
  },
  {
    id: 14,
    name: 'Tulsi',
    category: 'Medicinal Plants',
    price: 149,
    description: 'A familiar aromatic herb grown in many Indian homes.',
    image: 'photo-1501004318641-b39e6451bec6',
  },
  {
    id: 15,
    name: 'Neem Sapling',
    category: 'Medicinal Plants',
    price: 249,
    description: 'A young neem tree for suitable outdoor spaces.',
    image: 'photo-1441974231531-c6227db76b6e',
  },
  {
    id: 16,
    name: 'Turmeric Plant',
    category: 'Medicinal Plants',
    price: 229,
    description: 'A tropical leafy plant grown for its rhizomes.',
    image: 'photo-1466692476868-aef1dfb1e735',
  },
  {
    id: 17,
    name: 'Ginger Plant',
    category: 'Medicinal Plants',
    price: 219,
    description: 'A leafy tropical plant that grows from rhizomes.',
    image: 'photo-1416879595882-3373a0480b5b',
  },
  {
    id: 18,
    name: 'Chamomile',
    category: 'Medicinal Plants',
    price: 199,
    description: 'A flowering herb with delicate, daisy-like blooms.',
    image: 'photo-1490750967868-88aa4486c946',
  },
];

const categories = [
  'Air-Purifying Plants',
  'Aromatic Plants',
  'Medicinal Plants',
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Navbar />
      <main className="catalogue page-container">
        <header className="page-heading">
          <p className="eyebrow">FIND YOUR GREEN COMPANION</p>
          <h1>Our Plant Collection</h1>
          <p>Bring home a little more green, one plant at a time.</p>
        </header>

        {categories.map((category) => (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>
            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const alreadyAdded = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <article className="plant-card" key={plant.id}>
                      <img
                        src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=700&q=80`}
                        alt={plant.name}
                        loading="lazy"
                      />
                      <div className="plant-card-content">
                        <h3>{plant.name}</h3>
                        <p className="plant-description">
                          {plant.description}
                        </p>
                        <div className="plant-card-footer">
                          <span className="price">₹{plant.price}</span>
                          <button
                            className="primary-button"
                            disabled={alreadyAdded}
                            onClick={() => dispatch(addItem(plant))}
                          >
                            {alreadyAdded ? 'Added to Cart' : 'Add to Cart'}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
