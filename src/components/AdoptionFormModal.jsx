import React from 'react';
import ReactDOM from 'react-dom';

function AdoptionFormModal({ openAdoption, closeAdoption, children, cat }) {
  const modalRoot = document.getElementById('modal');

  const modalContent = (
    <dialog open className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-blue-100 w-full h-full bg-gray-800 bg-opacity-70 backdrop-blur-sm">
      <div className="w-4/5 h-5/5 bg-blue-100 rounded-lg shadow-lg border border-solid border-x-8 border-y-8 border-blue-900 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Adopt: {cat.name}!</h2>
        <div className="form-container flex-col justify-center items-center">{children}</div>
        <button className="w-20 mx-auto mt-4 mb-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={closeAdoption}>
          Close
        </button>
      </div>
    </dialog>
  );

  return openAdoption ? ReactDOM.createPortal(modalContent, modalRoot) : null;
}

export default AdoptionFormModal;