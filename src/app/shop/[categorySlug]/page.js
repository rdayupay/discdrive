import Modal from '@/components/Modal';
import NewListingForm from '@/components/NewListingForm';
import React from 'react';

async function ProductPage() {
  return (
    <div>
      <Modal>
        <NewListingForm />
      </Modal>
      <div>ProductPage</div>
    </div>
  );
}

export default ProductPage;
