import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function Navbar() {
  const [menu, setMenu] = useState('Home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(StoreContext); // Assuming cartItems from StoreContext

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark'); // Default to dark mode
    }
  }, []);

  // Toggle theme and save preference
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Calculate cart item count; assumes cartItems is { [id]: quantity }
  const cartItemCount = cartItems
    ? Object.values(cartItems).reduce((sum, qty) => sum + (qty || 0), 0)
    : 0;

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-neutral-800 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <img src={assets.logo} alt="logo" className="h-10 w-auto" />

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className="md:hidden text-neutral-600 dark:text-neutral-200 focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Menu Items */}
      <ul
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-neutral-800 md:bg-transparent dark:md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out z-40`}
      >
        {['Home', 'Menu', 'Mobile-app', 'Contact-us'].map((item) => (
          <li
            key={item}
            onClick={() => {
              setMenu(item);
              setIsMobileMenuOpen(false); // Close mobile menu on selection
            }}
            className={`cursor-pointer text-lg font-medium ${
              menu === item
                ? 'text-orange-500 dark:text-orange-400 border-b-2 border-orange-500'
                : 'text-neutral-600 dark:text-neutral-200 hover:text-orange-500 dark:hover:text-orange-400'
            } transition-colors duration-200`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          alt="search"
          className="h-6 w-6 cursor-pointer hover:opacity-80"
        />

        {/* Cart Icon with Item Count */}
        <div className="relative">
          <img
            src={assets.basket_icon}
            alt="cart"
            className="h-6 w-6 cursor-pointer hover:opacity-80"
          />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </div>

        {/* Sign In Button */}
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700 transition-colors duration-200"
        >
          Sign In
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-neutral-800 dark:text-neutral-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {isDarkMode ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Light
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
              Dark
            </>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;