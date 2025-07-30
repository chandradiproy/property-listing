import React, { useState } from 'react';
import { useProperties } from '../../../context/PropertyContext';
import type { Property } from '../../../types/index'; // Changed to 'import type'

/**
 * A form for adding a new property.
 * Includes validation and a success message on submission.
 */
export const AddPropertyForm = ({ onFormSubmit }: { onFormSubmit: () => void }) => {
  const { addProperty } = useProperties();
  const [name, setName] = useState('');
  const [type, setType] = useState<Property['type']>('Plot');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !location || !description) {
      alert("Please fill all fields");
      return;
    }
    addProperty({ name, type, price: Number(price), location, description });
    setName('');
    setType('Plot');
    setPrice('');
    setLocation('');
    setDescription('');
    setShowSuccess(true);
    setTimeout(() => {
        setShowSuccess(false);
        onFormSubmit(); // Close the form area after submission
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-3xl mx-auto border border-slate-200 dark:border-slate-700">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">List a New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Property Name</label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 form-input w-full rounded-lg bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:ring-sky-500 focus:border-sky-500" placeholder="e.g., Sunrise Apartments" required />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Type</label>
            <select id="type" value={type} onChange={e => setType(e.target.value as any)} className="mt-1 form-select w-full rounded-lg bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:ring-sky-500 focus:border-sky-500" required>
              <option>Plot</option> <option>Shed</option> <option>Retail Store</option> <option>House</option> <option>Apartment</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Price ($)</label>
            <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} className="mt-1 form-input w-full rounded-lg bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:ring-sky-500 focus:border-sky-500" placeholder="e.g., 150000" required />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Location</label>
            <input type="text" id="location" value={location} onChange={e => setLocation(e.target.value)} className="mt-1 form-input w-full rounded-lg bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:ring-sky-500 focus:border-sky-500" placeholder="e.g., Bangalore" required />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={4} className="mt-1 form-textarea w-full rounded-lg bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:ring-sky-500 focus:border-sky-500" placeholder="A short description of the property..." required></textarea>
        </div>
        <div className="flex justify-end items-center pt-2">
          {showSuccess && <span className="text-green-500 mr-4 transition-opacity">✓ Property Added!</span>}
          <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-semibold rounded-lg text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-800">
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
};
