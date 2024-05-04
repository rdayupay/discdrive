import React from 'react';
import Filter from '../Filter';
import Sort from '../Sort';

function LeftSidebar() {
  return (
    <div className="sticky top-0 p-10 flex flex-col gap-12 bg-blue-100 shadow-xl">
      <Filter />
      <Sort />
    </div>
  );
}

export default LeftSidebar;
