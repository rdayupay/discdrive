import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import { Redacted_Script } from 'next/font/google';

import { random } from '../../lib/utils/utils';

const loadingFont = Redacted_Script({
  weight: ['400'],
  subsets: ['latin'],
  display: 'block',
});

const lorem = new LoremIpsum();

function DiscCardSkeleton() {
  return (
    <article
      className={`${loadingFont.className} flex flex-col bg-card rounded-md border lg:border-2 border-gray-400 overflow-hidden relative`}
      aria-hidden="true"
    >
      <div className="relative w-full h-0 pb-[100%]">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10"></div>
      </div>
      <div className="p-2 ">
        <h2 className="text-l text-center lg:text-l font-bold bg-slate-300">
          {lorem.generateWords(random(2, 4))}
        </h2>
        <p className="text-gray-700 lg:text-m mb-2">
          {lorem.generateWords(random(2, 4))}
        </p>
        <dl className="grid grid-cols-2 gap-1">
          <div className="lg:col-span-2">
            <dt className="text-sm text-gray-600">Price</dt>
            <dd className="font-bold text-lg text-green-600">
              ${lorem.generateWords(1, 3)}
            </dd>
          </div>

          <div className="lg:col-span-1">
            <dt className="text-xs text-gray-600">Speed</dt>
            <dd className="font-semibold text-sm text-gray-900">
              {lorem.generateWords(1, 2)}
            </dd>
          </div>

          <div className="lg:col-span-1">
            <dt className="text-xs text-gray-600">Weight (g)</dt>
            <dd className="font-semibold text-sm text-gray-900">
              {lorem.generateWords(2, 3)}
            </dd>
          </div>

          <div className="lg:col-span-2">
            <dt className="text-xs text-gray-600">Color</dt>
            <dd className="font-semibold text-sm text-gray-900">
              {lorem.generateWords(2, 4)}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default DiscCardSkeleton;
