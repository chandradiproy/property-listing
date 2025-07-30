import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react';
import type { Property } from '../types'; // Changed to 'import type'

// --- MOCK API & DATA ---
const initialProperties: Property[] = [
    { id: '1', name: 'Green Valley Plot', type: 'Plot', location: 'Pune', price: 250000, description: 'A large plot of land available for development in a serene, green valley. Perfect for building your dream home away from the city hustle.', image: 'https://placehold.co/600x400/a7c957/ffffff?text=Green+Valley' },
    { id: '2', name: 'Urban Storage Shed', type: 'Shed', location: 'Bangalore', price: 76000, description: 'A secure and spacious shed in a prime industrial location. Ideal for commercial storage or as a workshop.', image: 'https://placehold.co/600x400/6a4c93/ffffff?text=Urban+Shed' },
    { id: '3', name: 'City Center Retail', type: 'Retail Store', location: 'Hyderabad', price: 150000, description: 'A commercial retail space in the heart of the city center, with high footfall and excellent visibility.', image: 'https://placehold.co/600x400/f28482/ffffff?text=City+Retail' },
    { id: '4', name: 'Serene Meadows Plot', type: 'Plot', location: 'Khermai', price: 200000, description: 'A spectacular plot situated in a serene area, offering peace and tranquility. An excellent investment opportunity.', image: 'https://placehold.co/600x400/84a59d/ffffff?text=Serene+Plot' },
    { id: '5', name: 'Coastal Plot', type: 'Plot', location: 'Chennai', price: 300000, description: 'A specious plot situated in a serene coastal area. Ideal for a beach house or a vacation rental property.', image: 'https://placehold.co/600x400/52b69a/ffffff?text=Coastal+Plot' },
    { id: '6', name: 'Suburban Shed', type: 'Shed', location: 'Mumbai', price: 30000, description: 'A sturdy and accessible shed in a quiet suburban location, perfect for personal storage or a small business.', image: 'https://placehold.co/600x400/f79d65/ffffff?text=Suburban+Shed' },
    { id: '7', name: 'Downtown Retail Hub', type: 'Retail Store', location: 'Kolkata', price: 175000, description: 'A modern retail unit in a bustling downtown complex. Comes with pre-installed fixtures and high-speed internet.', image: 'https://placehold.co/600x400/f5cac3/ffffff?text=Downtown+Hub' },
    { id: '8', 'name': 'Jaipur Heritage Plot', 'type': 'Plot', 'location': 'Jaipur', 'price': 160000, 'description': 'A large plot of land available for development in the historic city of Jaipur, offering a blend of tradition and modernity.', 'image': 'https://placehold.co/600x400/9c6644/ffffff?text=Heritage+Plot' }
];

interface PropertyContextType {
  properties: Property[];
  addProperty: (property: Omit<Property, 'id' | 'image'>) => void;
  loading: boolean;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

/**
 * Provides property data and actions to its children.
 * It simulates fetching data from an API and provides a function to add new properties.
 */
export const PropertyProvider = ({ children }: { children: React.ReactNode }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API fetch with a 1-second delay
    const timer = setTimeout(() => {
      setProperties(initialProperties);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const addProperty = useCallback((propertyData: Omit<Property, 'id' | 'image'>) => {
    const newProperty: Property = {
      ...propertyData,
      id: crypto.randomUUID(),
      image: `https://placehold.co/600x400/0ea5e9/ffffff?text=${propertyData.name.replace(/\s/g, '+')}`,
    };
    setProperties(prev => [newProperty, ...prev]);
  }, []);

  const value = useMemo(() => ({ properties, addProperty, loading }), [properties, addProperty, loading]);

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

/**
 * Custom hook to easily access the property context.
 */
export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperties must be used within a PropertyProvider');
  }
  return context;
};
