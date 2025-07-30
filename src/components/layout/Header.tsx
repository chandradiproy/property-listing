import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, PlusCircle } from 'lucide-react'; // Using lucide-react for icons

interface HeaderProps {
  onAddPropertyClick: () => void;
}

/**
 * The main header for the application.
 * Contains the title, a button to add a new property, and the theme toggle.
 */
export const Header = ({ onAddPropertyClick }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm sticky top-0 z-40 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Property<span className="text-sky-500">Hub</span>
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={onAddPropertyClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-900 transition-all"
            >
              <PlusCircle size={18} />
              Add Property
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-900 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
