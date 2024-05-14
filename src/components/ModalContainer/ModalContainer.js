'use client';

import React, { useState } from 'react';
import DialogBox from '../DialogBox';
import { Plus } from 'react-feather';

function ModalContainer({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex items-center justify-center mt-8 lg:mr-36">
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded flex items-center"
      >
        <Plus className="h-4 w-4 mr-1" /> Create New Disc
      </button>
      <DialogBox isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-semibold mb-4">
          Create a New Disc Listing
        </h2>
        {children}
      </DialogBox>
    </div>
  );
}

export default ModalContainer;
