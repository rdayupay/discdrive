'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getDiscs } from '@/helpers/data';
import LeftSidebar from '@/components/LeftSidebar';
import ModalContainer from '@/components/ModalContainer';
import NewListingForm from '@/components/NewListingForm';
import GridWrapper from '@/components/GridWrapper';
import DiscCard from '@/components/DiscCard';

const ProductPageClient = ({ categorySlug }) => {
  const searchParams = useSearchParams();
  const [discs, setDiscs] = useState([]);
  const [loading, setLoading] = useState(true);
  const colorFilter = searchParams.get('color') || '';
  const selectedFilter = categorySlug === 'products' ? '' : categorySlug;

  useEffect(() => {
    const fetchDiscs = async () => {
      setLoading(true);
      const fetchedDiscs = await getDiscs(categorySlug, colorFilter);
      setDiscs(fetchedDiscs);
      setLoading(false);
    };

    fetchDiscs();
  }, [categorySlug, colorFilter]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-48 bg-gray-100">
        <LeftSidebar selectedFilter={selectedFilter} discs={discs} />
      </div>

      <div className="w-full">
        <ModalContainer>
          <NewListingForm />
        </ModalContainer>

        <div className="p-5">
          <GridWrapper>
            {discs.length > 0 ? (
              discs.map((disc) => <DiscCard key={disc._id} disc={disc} />)
            ) : (
              <div>No discs available.</div>
            )}
          </GridWrapper>
        </div>
      </div>
    </div>
  );
};

export default ProductPageClient;
