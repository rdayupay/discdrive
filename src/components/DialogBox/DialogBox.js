import React from 'react';
import { X } from 'react-feather';

function DialogBox({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-md px-3 py-1 focus:outline-none"
        >
          <X />
        </button>
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
}

export default DialogBox;
