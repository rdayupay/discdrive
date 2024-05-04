import React from 'react';

import LeftSidebar from '@/components/LeftSidebar';

function CategoryLayout({ children }) {
  return (
    <main className="flex max-lg:flex-col text-grey-1">
      <LeftSidebar />
      <div className="flex-1">{children}</div>
    </main>
  );
}

export default CategoryLayout;
