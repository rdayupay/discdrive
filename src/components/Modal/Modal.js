import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function Modal({ children }) {
  return (
    <Dialog>
      <div className="flex justify-center mt-8 mb-8">
        <DialogTrigger className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          + Create New Listing
        </DialogTrigger>
      </div>
      <DialogContent className="bg-white rounded-lg p-6 max-w-xl w-full mx-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-medium">
            Create a New Disc Listing
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
