import React, { useState } from 'react';
import CatModal from './CatModal.jsx';
import AdoptionFormModal from './AdoptionFormModal.jsx';
import CatAdoptionForm from './CatAdoptionForm.jsx';

function Cat({ cat }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdoptionOpen, setIsAdoptionOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal =() => {
    setIsOpen(false);
  }


  return (
    <div className="group border border-solid border-x-4 border-y-4 border-blue-900 rounded-lg p-4 flex flex-col justify-between">
      <div>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src={cat.image} alt={`Picture of ${cat.name}`} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-l font-medium text-gray-900">Name: {cat.name}</h3>
        <p className="mt-1 text-l font-medium text-gray-900">Gender: {cat.gender}</p>
        <p className="mt-1 text-l font-medium text-gray-900">Age: {cat.age}</p>
        <p className="mt-1 text-l font-medium text-gray-900">Location: {cat.location}</p>
        <p className="mt-1 text-l font-medium text-gray-900">Description: {cat.description}</p>
        <p className="mt-1 text-l font-medium text-gray-900">Temperment: {cat.temperment}</p>
      </div>
      <div className="mt-auto">
        <button
          className="text-m font-medium text-gray-900 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={openModal}>
          Learn More About {cat.name}!
        </button>
        <div>
        <button className="mx-auto mt-5 mb-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full" onClick={() => setIsAdoptionOpen(true)}>
            Take Me Home With You!
          </button>
    </div>
        <CatModal isOpen={isOpen} onClose={closeModal} cat={cat}>
          <h3 className="mt-4 text-m font-medium text-gray-900">Name: {cat.name}</h3>
          <img src={cat.image} alt={`Picture of ${cat.name}`} className="h-60 w-65 object-cover object-center group-hover:opacity-75" />
          <p className="mt-1 text-m font-medium text-gray-900">Gender: {cat.gender}</p>
          <p className="mt-1 text-m font-medium text-gray-900">Breed: {cat.breed}</p>
          <p className="mt-1 text-m font-medium text-gray-900">Age: {cat.age}</p>
          <p className="mt-1 text-m font-medium text-gray-900">Size: {cat.size}</p>
          <p className="mt-1 text-m font-medium text-gray-900">Location: {cat.location}</p>
          <p className="mt-1 text-m font-medium text-gray-900">Description: {cat.description}</p>
          <p className="mt-1 mx-2 text-m font-medium text-gray-900">Biography: {cat.biography}</p>
          <p className="mt-1 text-m font-medium text-gray-900">Status: {cat.status}</p>
          <p className="mt-1 text-m font-medium text-gray-900">
            Compatibility: {cat.compatibility}
          </p>
          <p className="mt-1 text-m font-medium text-gray-900">Health: {cat.health}</p>
          <p className="mt-1 text-m font-medium text-gray-900">Adoption Fee: ${cat.fee}</p>
        </CatModal>
        <AdoptionFormModal openAdoption={isAdoptionOpen} closeAdoption={() => setIsAdoptionOpen(false)} cat={cat}>
          <CatAdoptionForm />
        </AdoptionFormModal>
      </div>
    </div>
  )
}

export default Cat;
