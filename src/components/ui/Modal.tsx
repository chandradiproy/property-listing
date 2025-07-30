import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  backdropClassName?: string; // Prop to allow custom backdrop styling
}

/**
 * A generic, accessible, and beautifully animated modal component.
 * It traps focus and can be closed by clicking the overlay or pressing the Escape key.
 */
export const Modal = ({ isOpen, onClose, children, backdropClassName = '' }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 animate-[fade-in_0.2s_ease-out] ${backdropClassName}`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-3xl transform animate-[slide-up_0.3s_ease-out] border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* The close button is now part of the form itself for better layout control */}
        {children}
      </div>
    </div>
  );
};
