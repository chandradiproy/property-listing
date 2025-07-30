/**
 * Defines the shape of a single property object.
 * This ensures type safety across the entire application when dealing with property data.
 */
export interface Property {
  id: string;
  name: string;
  type: 'Plot' | 'Shed' | 'Retail Store' | 'House' | 'Apartment';
  location: string;
  price: number;
  description: string;
  image: string;
}
