import React, { useState, useEffect, useMemo } from 'react';
import { useProperties } from './context/PropertyContext';
import type { Property } from './types';
import { Header } from './components/layout/Header';
import { PropertyFilters } from './features/property/components/PropertyFilters';
import { PropertyList } from './features/property/components/PropertyList';
import { AddPropertyForm } from './features/property/components/AddPropertyForm';
import { Modal } from './components/ui/Modal';
import { PropertyDetailsModal } from './features/property/components/PropertyDetailsModal';
import { Plus } from 'lucide-react';

/**
 * The main application component. It orchestrates all other components and manages the application's state.
 */
function App() {
  const { properties, loading } = useProperties();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddFormVisible, setAddFormVisible] = useState(false);

  // Effect to filter properties whenever the source data or filter criteria change.
  useEffect(() => {
    let result = properties;
    if (filterType !== 'All') {
      result = result.filter(p => p.type === filterType);
    }
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(lowercasedTerm) ||
        p.location.toLowerCase().includes(lowercasedTerm)
      );
    }
    setFilteredProperties(result);
  }, [properties, filterType, searchTerm]);

  // Memoized list of unique property types for the filter dropdown.
  const propertyTypes = useMemo(() => ['All', ...Array.from(new Set(properties.map(p => p.type)))], [properties]);

  return (
    <div className="min-h-screen font-sans">
      <Header onAddPropertyClick={() => setAddFormVisible(true)} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <PropertyFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
          propertyTypes={propertyTypes}
        />

        <PropertyList
          properties={filteredProperties}
          loading={loading}
          onViewProperty={(property) => setSelectedProperty(property)}
        />
      </main>

      {/* Floating Action Button for mobile */}
      <div className="sm:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setAddFormVisible(true)}
          className="p-4 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-900 transition-transform hover:scale-110 active:scale-100"
          aria-label="Add new property"
        >
          <Plus size={24} />
        </button>
      </div>
      
      {/* Modal for Adding a Property with backdrop blur */}
      <Modal 
        isOpen={isAddFormVisible} 
        onClose={() => setAddFormVisible(false)}
        backdropClassName="backdrop-blur-sm"
      >
        <AddPropertyForm onFormSubmit={() => setAddFormVisible(false)} />
      </Modal>

      {/* Modal for viewing property details */}
      <Modal isOpen={!!selectedProperty} onClose={() => setSelectedProperty(null)}>
        {selectedProperty && <PropertyDetailsModal property={selectedProperty} />}
      </Modal>
    </div>
  );
}

export default App;
