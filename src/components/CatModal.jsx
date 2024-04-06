import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import AdoptionFormModal from './AdoptionFormModal.jsx';

function CatModal({ isOpen, onClose, children, cat }) {
  const [isAdoptionOpen, setIsAdoptionOpen] = useState(false);

  const modalRoot = document.getElementById('modal');

  const modalContent = (
    <dialog open className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-blue-100 w-full h- bg-blue-100 w-3/5 h-5/5 bg-gray-800 bg-opacity-70 backdrop-blur-sm">
      <div className="w-3/5 h-5/5 bg-blue-100 rounded-lg shadow-lg border border-solid border-x-8 border-y-8 border-blue-900 flex flex-col justify-center items-center">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Learn more about: {cat.name}!</h2>
        <div className="flex flex-col justify-center items-center text-xl">{children}</div>
        <button className="w-20 mx-auto mt-20 mb-5 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </dialog>
  );

  return isOpen ? ReactDOM.createPortal(modalContent, modalRoot) : null;
}

export default CatModal;
