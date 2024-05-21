import React from 'react';
import { getDiscs } from '@/helpers/data';
import LeftSidebar from '@/components/LeftSidebar';
import ModalContainer from '@/components/ModalContainer';
import NewListingForm from '@/components/NewListingForm';
import GridWrapper from '@/components/GridWrapper';
import DiscCard from '@/components/DiscCard';

const ProductPage = async ({ params, searchParams }) => {
  const { categorySlug } = params;
  const colorFilter = searchParams ? searchParams.color : '';
  const sortAttribute = searchParams ? searchParams.sort : '';
  const selectedFilter = categorySlug === 'products' ? '' : categorySlug;

  const discs = await getDiscs(categorySlug, colorFilter, sortAttribute);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-48 bg-gray-100">
        <LeftSidebar
          selectedFilter={selectedFilter}
          discs={discs}
          categorySlug={categorySlug}
        />
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

export default ProductPage;
