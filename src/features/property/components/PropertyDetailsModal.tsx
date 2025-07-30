import React from 'react';
import type { Property } from '../../../types/index'; // Changed to 'import type'
import { MapPin, Tag, DollarSign } from 'lucide-react';

interface PropertyDetailsModalProps {
  property: Property;
}

/**
 * The content displayed inside the modal when a user views a property.
 * It presents all property details in a clean, organized layout.
 */
export const PropertyDetailsModal = ({ property }: PropertyDetailsModalProps) => {
  return (
    <div>
      <div className="w-full h-56 sm:h-72 md:h-80 bg-slate-200 dark:bg-slate-700 rounded-t-2xl overflow-hidden">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{property.name}</h3>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-sky-500" />
            <span className="font-semibold">{property.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-sky-500" />
            <span className="font-semibold">{property.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-sky-500" />
            <span className="text-xl font-bold text-slate-800 dark:text-slate-100">${property.price.toLocaleString()}</span>
          </div>
        </div>
        <p className="mt-6 text-slate-700 dark:text-slate-300 leading-relaxed">{property.description}</p>
      </div>
    </div>
  );
};
