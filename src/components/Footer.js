import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary">SPLIT</Link>
            <p className="mt-4 text-gray-300">
              Serving delicious sandwiches with quality ingredients since 2023. 
              Your satisfaction is our top priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-primary transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:info@split.com" className="hover:text-primary transition-colors">
                  info@split.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block">Address:</span>
                123 Sandwich Street
                <br />
                Foodville, FD 12345
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Split Sandwiches. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 