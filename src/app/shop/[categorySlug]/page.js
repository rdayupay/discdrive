import ModalContainer from '@/components/ModalContainer';
import NewListingForm from '@/components/NewListingForm';
import React from 'react';

async function ProductPage() {
  return (
    <div>
      <ModalContainer>
        <NewListingForm />
      </ModalContainer>
      <div>ProductPage</div>
    </div>
  );
}

export default ProductPage;
