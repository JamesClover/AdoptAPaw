import React, { useState } from 'react';
import axios from 'axios';

function CatSearch({ handleSearch }) {
  const [criteria, setCriteria] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-gray-100 h-16 flex items-center px-4">
      <select
        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
      >
        <option value="">Select Criteria</option>
        <option value="age">Age</option>
        <option value="breed">Breed</option>
        <option value="location">Location</option>
      </select>
      <input
        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={(e) => handleSearch(criteria, searchTerm)}
      >
        Search
      </button>
    </div>
  );
}

export default CatSearch;
