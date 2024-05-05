'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';

function NewListingForm() {
  const initialData = {
    discType: '',
    name: '',
    speed: 1,
    color: '',
    weight: 1,
    price: 0.1,
    image: '',
  };

  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await fetch('/api/discs', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setLoading(false);
        toast.success('Disc created!');

        router.push('/');
        router.refresh();
      }
    } catch (err) {
      console.log('[products_POST', err);
      toast.error('Something went wrong! Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4 pb-4 grid grid-cols-3 gap-4">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-2 border border-gray-300 rounded w-full"
          value={formData.name}
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="discType"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Disc Type
        </label>
        <select
          name="discType"
          value={formData.discType}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required={true}
        >
          <option value="">Select Type</option>
          <option value="putter">Putter</option>
          <option value="mid-range">Mid-range</option>
          <option value="driver">Driver</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="speed"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Speed
        </label>
        <input
          type="number"
          id="speed"
          name="speed"
          className="p-2 border border-gray-300 rounded w-full"
          value={formData.speed}
          min={1}
          max={14}
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="color"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Color
        </label>
        <input
          type="text"
          id="color"
          name="color"
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          value={formData.color}
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="weight"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Weight
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          className="p-2 border border-gray-300 rounded w-full"
          value={formData.weight}
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="p-2 border border-gray-300 rounded w-full"
          value={formData.price}
          step={0.01}
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Image
        </label>
        <input
          type="text"
          id="image"
          name="image"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={formData.image}
          onChange={handleChange}
          required={true}
        />
      </div>

      <div className="col-span-3 flex justify-center md:justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default NewListingForm;
