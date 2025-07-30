import React from 'react';
import type { Property } from '../../../types/index'; // Changed to 'import type'
import { MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onView: () => void;
}

/**
 * Displays a single property in a visually appealing card format.
 * Includes hover effects and a clear call-to-action.
 */
export const PropertyCard = ({ property, onView }: PropertyCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">{property.type}</p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 truncate">{property.name}</h3>
          <div className="flex items-center text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <MapPin size={14} className="mr-1.5 flex-shrink-0" />
            <span>{property.location}</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">{property.description}</p>
        </div>
        <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <p className="text-xl font-extrabold text-slate-800 dark:text-white">
            ${property.price.toLocaleString()}
          </p>
          <button
            onClick={onView}
            className="px-4 py-2 bg-sky-500 text-white text-sm font-semibold rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-800 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
