import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-white text-sm">© 2024 AdoptAPaw</p>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Privacy Policy</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Terms of Service</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
