'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { ATTRIBUTES, SORT_OPTIONS } from '@/lib/constants';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function LeftSidebar({ selectedFilter, discs, categorySlug }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const colors = [...new Set(discs.map((disc) => disc.color))].map((color) =>
    capitalizeFirstLetter(color)
  );

  const handleColorChange = (event) => {
    const color = event.target.value.toLowerCase();
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('color', color);
    newSearchParams.delete('sort');
    router.push(`/shop/${categorySlug}?${newSearchParams.toString()}`);
  };

  const handleSortChange = (event) => {
    const sort = event.target.value;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('sort', sort);
    router.push(`/shop/${categorySlug}?${newSearchParams.toString()}`);
  };

  return (
    <aside className="p-3 sm:p-4 lg:p-6">
      <div className="grid lg:grid-cols-1 grid-cols-3 gap-4">
        <nav>
          <Link href={`/shop/products`}>
            <h2 className="text-sm font-semibold text-gray-800 mb-2">
              Available Discs
            </h2>
          </Link>
          <ul className="space-y-2">
            {ATTRIBUTES.map(({ slug, label }) => (
              <li key={slug}>
                <Link href={`/shop/${slug}`}>
                  <button
                    className={`w-full py-1 px-4 rounded-md text-left focus:outline-none focus:ring-0 focus:border-transparent ${
                      selectedFilter === slug
                        ? 'bg-blue-200'
                        : 'hover:bg-blue-200'
                    }`}
                  >
                    {label}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h2 className="text-sm font-semibold text-gray-800 mb-4 mt-4">
            Colors
          </h2>
          <select
            onChange={handleColorChange}
            className="block w-full py-2 px-4 rounded-md text-left focus:outline-none focus:ring-0 focus:border-transparent bg-white border-gray-300"
          >
            <option value="">All Colors</option>
            {colors.map((color) => (
              <option key={color} value={color.toLowerCase()}>
                {color}
              </option>
            ))}
          </select>
        </nav>

        <nav>
          <h2 className="text-sm font-semibold text-gray-800 mb-4 mt-4">
            Sort by
          </h2>
          <select
            onChange={handleSortChange}
            className="block w-full py-2 px-4 rounded-md text-left focus:outline-none focus:ring-0 focus:border-transparent bg-white border-gray-300"
          >
            <option value="">None</option>
            {SORT_OPTIONS.map(({ slug, label }) => (
              <option key={slug} value={slug}>
                {label}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </aside>
  );
}

export default LeftSidebar;
