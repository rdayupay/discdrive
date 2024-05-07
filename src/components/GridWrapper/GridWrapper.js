import React from 'react';

async function GridWrapper({ children }) {
  return (
    <section className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-auto">
        {children}
      </div>
    </section>
  );
}

export default GridWrapper;
