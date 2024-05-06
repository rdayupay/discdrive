import React from 'react';

import LeftSidebar from '@/components/LeftSidebar';
import { ATTRIBUTES } from '@/lib/constants';

function CategoryLayout({ params, children }) {
  return (
    <main className="flex max-lg:flex-col ">
      <LeftSidebar selectedFilter={params.categorySlug} />

      <div className="flex-1">{children}</div>
    </main>
  );
}

export default CategoryLayout;
