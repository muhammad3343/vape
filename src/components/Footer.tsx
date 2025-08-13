import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">VapeVibe</span>
            </Link>
            <p className="text-gray-400">
              Your trusted partner for premium vaping experiences. Quality products, exceptional flavors, and outstanding service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=device" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Vape Devices
                </Link>
              </li>
              <li>
                <Link to="/products?category=pod" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Pods
                </Link>
              </li>
              <li>
                <Link to="/products?category=juice" className="text-gray-400 hover:text-white transition-colors duration-300">
                  E-Juices
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Accessories</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">support@vapevibe.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">1-800-VAPEVIBE</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400">123 Vape Street, Cloud City</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} VapeVibe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 hover:text-white text-sm cursor-pointer transition-colors duration-300">
              Privacy Policy
            </span>
            <span className="text-gray-400 hover:text-white text-sm cursor-pointer transition-colors duration-300">
              Terms of Service
            </span>
            <span className="text-gray-400 hover:text-white text-sm cursor-pointer transition-colors duration-300">
              Age Verification
            </span>
          </div>
        </div>

        {/* Age Warning */}
        <div className="mt-8 p-4 bg-red-900/20 border border-red-700 rounded-lg">
          <p className="text-sm text-red-300 text-center">
            <strong>WARNING:</strong> This product contains nicotine. Nicotine is an addictive chemical. 
            This website is intended for adults 21 years of age and older.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;