import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

const locations = [
  {
    id: 1,
    name: 'Downtown',
    address: '123 Main Street, Downtown, City, ST 12345',
    phone: '(123) 456-7890',
    hours: {
      mon_fri: '7:00 AM - 9:00 PM',
      sat: '8:00 AM - 10:00 PM',
      sun: '8:00 AM - 8:00 PM',
    },
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
  {
    id: 2,
    name: 'Midtown',
    address: '456 Park Avenue, Midtown, City, ST 12345',
    phone: '(123) 456-7891',
    hours: {
      mon_fri: '7:00 AM - 9:00 PM',
      sat: '8:00 AM - 10:00 PM',
      sun: '8:00 AM - 8:00 PM',
    },
    coordinates: { lat: 40.7549, lng: -73.9840 },
  },
  {
    id: 3,
    name: 'Uptown',
    address: '789 Broadway, Uptown, City, ST 12345',
    phone: '(123) 456-7892',
    hours: {
      mon_fri: '7:00 AM - 9:00 PM',
      sat: '8:00 AM - 10:00 PM',
      sun: '8:00 AM - 8:00 PM',
    },
    coordinates: { lat: 40.7829, lng: -73.9654 },
  },
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container py-8">
          <h1 className="text-4xl font-bold text-center mb-4">Our Locations</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Find your nearest Split Sandwiches location and visit us today.
            We're conveniently located throughout the city.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Locations List */}
          <div className="lg:col-span-1 space-y-4">
            {locations.map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg cursor-pointer transition-colors ${
                  selectedLocation.id === location.id
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPinIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ClockIcon className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p>Mon-Fri: {location.hours.mon_fri}</p>
                      <p>Sat: {location.hours.sat}</p>
                      <p>Sun: {location.hours.sun}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow-lg h-[600px]">
              {/* Map placeholder - Replace with actual map implementation */}
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <p className="text-gray-500">Map View</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Visit Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Come experience our delicious sandwiches and friendly service at any of our locations.
          </p>
          <a
            href={`https://maps.google.com/?q=${selectedLocation.address}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-primary hover:bg-gray-100"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
} 