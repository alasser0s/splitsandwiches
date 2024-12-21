import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const galleryItems = [
  {
    id: 1,
    title: 'Classic Club Sandwich',
    description: 'Our signature club sandwich made with premium ingredients',
    category: 'Sandwiches',
    image: 'classic-club.jpg',
  },
  {
    id: 2,
    title: 'Downtown Location',
    description: 'Our beautiful downtown restaurant interior',
    category: 'Locations',
    image: 'downtown.jpg',
  },
  {
    id: 3,
    title: 'Fresh Ingredients',
    description: 'Daily fresh ingredients we use in our sandwiches',
    category: 'Kitchen',
    image: 'ingredients.jpg',
  },
  {
    id: 4,
    title: 'Italian Supreme',
    description: 'The perfect combination of Italian flavors',
    category: 'Sandwiches',
    image: 'italian-supreme.jpg',
  },
  {
    id: 5,
    title: 'Happy Customers',
    description: 'Our satisfied customers enjoying their meals',
    category: 'People',
    image: 'customers.jpg',
  },
  {
    id: 6,
    title: 'Kitchen Team',
    description: 'Our dedicated kitchen team preparing your orders',
    category: 'Kitchen',
    image: 'team.jpg',
  },
  // Add more gallery items as needed
];

const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container py-8">
          <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Take a visual journey through our restaurants, delicious sandwiches,
            and the people who make it all possible.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="container py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-200"></div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
                <p className="text-sm text-gray-500 mt-2">Category: {selectedImage.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit us today and experience our delicious sandwiches for yourself.
          </p>
          <div className="space-x-4">
            <a href="/menu" className="btn bg-white text-primary hover:bg-gray-100">
              View Menu
            </a>
            <a href="/locations" className="btn bg-secondary text-white hover:bg-secondary-dark">
              Find Location
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 