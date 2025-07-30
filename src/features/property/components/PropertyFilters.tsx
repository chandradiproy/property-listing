import React from 'react';
import { Search, ListFilter } from 'lucide-react';

interface PropertyFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filterType: string;
  setFilterType: (value: string) => void;
  propertyTypes: string[];
}

/**
 * A component that houses the search and filter controls for the property list.
 * It's designed to be used in the main App component to control the displayed properties.
 */
export const PropertyFilters = ({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  propertyTypes,
}: PropertyFiltersProps) => {
  return (
    <div className="bg-white dark:bg-slate-800/50 p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 mb-8 sm:mb-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div className="md:col-span-3">
          <label htmlFor="search" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Search by Name or Location
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              id="search"
              placeholder="e.g., 'Green Valley' or 'Pune'"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input w-full rounded-lg bg-slate-100 dark:bg-slate-700 border-transparent focus:ring-sky-500 focus:border-sky-500 pl-10"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="filter" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Filter by Type
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <ListFilter className="h-5 w-5 text-slate-400" />
            </div>
            <select
              id="filter"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="form-select w-full rounded-lg bg-slate-100 dark:bg-slate-700 border-transparent focus:ring-sky-500 focus:border-sky-500 pl-10"
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
