import React from 'react';
import Link from 'next/link';

import { ATTRIBUTES } from '@/lib/constants';

function LeftSidebar({ selectedFilter }) {
  return (
    <aside className="p-6 flex flex-col gap-6 bg-gray-100 shadow-lg rounded-lg">
      <nav>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Available Discs
        </h2>
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
    </aside>
  );
}

export default LeftSidebar;
