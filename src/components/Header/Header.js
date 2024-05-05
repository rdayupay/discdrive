'use client';
import React from 'react';
import Link from 'next/link';
import { Menu, Search, ShoppingBag } from 'react-feather';

import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <div className="flex items-baseline px-8 py-4 border-b border-gray-300 overflow-auto">
        <div className="flex-1">
          <Logo />
        </div>
        <nav className="lg:flex lg:gap-8 hidden">
          <Link
            href="/shop/products"
            className="text-blue-500 uppercase font-semibold"
          >
            Shop
          </Link>
          <Link
            href="/community"
            className="text-gray-600 uppercase font-semibold"
          >
            Community
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 uppercase font-semibold"
          >
            Contact Us
          </Link>
        </nav>
        <div className="flex gap-8 lg:hidden">
          <button>
            <ShoppingBag />
          </button>
          <button>
            <Search />
          </button>
          <button>
            <Menu />
          </button>
        </div>
        <div className="flex-1 hidden lg:block sm:hidden"></div>
      </div>
    </header>
  );
};

export default Header;
