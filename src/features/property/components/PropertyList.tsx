import React from 'react';
import type { Property } from '../../../types/index'; // Changed to 'import type'
import { PropertyCard } from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
  loading: boolean;
  onViewProperty: (property: Property) => void;
}

/**
 * Renders the grid of property cards.
 * It also handles the display of a loading spinner and an empty state message
 * when no properties match the filter criteria.
 */
export const PropertyList = ({ properties, loading, onViewProperty }: PropertyListProps) => {
  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500 mx-auto"></div>
        <p className="mt-4 text-lg text-slate-500">Loading Properties...</p>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">No Properties Found</h3>
        <p className="mt-2 text-slate-500 dark:text-slate-400">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} onView={() => onViewProperty(property)} />
      ))}
    </div>
  );
};
