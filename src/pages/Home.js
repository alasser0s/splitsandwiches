import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-secondary to-secondary-dark overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container h-full flex items-center"
        >
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fresh & Delicious
              <span className="text-primary block mt-2">Sandwiches</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the perfect blend of flavors in every bite. Made with premium ingredients
              and crafted with love.
            </p>
            <div className="space-x-4">
              <Link to="/menu" className="btn btn-primary inline-flex items-center">
                Order Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/locations" className="btn bg-white text-secondary hover:bg-gray-100">
                Find Locations
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Split?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in delivering the best sandwich experience with our commitment
              to quality and service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gray-50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Popular Items</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try our most loved sandwiches that keep our customers coming back for more.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">${item.price}</span>
                    <Link to="/menu" className="btn btn-primary">
                      Order Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us for a delicious experience that will keep you coming back for more.
            </p>
            <Link to="/menu" className="btn bg-white text-primary hover:bg-gray-100">
              View Our Menu
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Sample data
const features = [
  {
    title: 'Fresh Ingredients',
    description: 'We use only the freshest ingredients, sourced from local suppliers.',
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep.',
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Quality Service',
    description: 'Exceptional customer service that puts you first.',
    icon: (props) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

const popularItems = [
  {
    name: 'Classic Club',
    description: 'Turkey, bacon, lettuce, tomato, and mayo on toasted bread',
    price: 12.99,
  },
  {
    name: 'Veggie Delight',
    description: 'Grilled vegetables, hummus, and fresh greens on whole grain',
    price: 10.99,
  },
  {
    name: 'Italian Supreme',
    description: 'Salami, pepperoni, ham, provolone, and Italian dressing',
    price: 13.99,
  },
]; 