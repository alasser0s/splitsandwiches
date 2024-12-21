import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import Checkout from '../components/Checkout';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'signature', name: 'Signature' },
  { id: 'classic', name: 'Classic' },
  { id: 'vegetarian', name: 'Vegetarian' },
  { id: 'sides', name: 'Sides & Drinks' },
];

const menuItems = [
  {
    id: 1,
    name: 'Classic Club',
    description: 'Turkey, bacon, lettuce, tomato, and mayo on toasted bread',
    price: 12.99,
    category: 'classic',
    image: 'classic-club.jpg',
  },
  {
    id: 2,
    name: 'Veggie Delight',
    description: 'Grilled vegetables, hummus, and fresh greens on whole grain',
    price: 10.99,
    category: 'vegetarian',
    image: 'veggie-delight.jpg',
  },
  {
    id: 3,
    name: 'Italian Supreme',
    description: 'Salami, pepperoni, ham, provolone, and Italian dressing',
    price: 13.99,
    category: 'signature',
    image: 'italian-supreme.jpg',
  },
  {
    id: 4,
    name: 'French Fries',
    description: 'Crispy golden fries with our special seasoning',
    price: 4.99,
    category: 'sides',
    image: 'french-fries.jpg',
  },
  // Add more menu items as needed
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    toast.success(`Added ${item.name} to cart`);
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== itemId);
      }
      return prevCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCart([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container py-8">
          <h1 className="text-4xl font-bold text-center mb-4">Our Menu</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover our delicious selection of handcrafted sandwiches and sides.
            Made fresh to order with premium ingredients.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container py-4">
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
      >
        <ShoppingCartIcon className="w-6 h-6" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-500">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <PlusIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="text-primary font-bold">
                        ${cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="w-full btn btn-primary"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <Checkout
          cart={cart}
          total={cartTotal}
          onClose={() => setIsCheckoutOpen(false)}
          onComplete={handleOrderComplete}
        />
      )}
    </div>
  );
} 