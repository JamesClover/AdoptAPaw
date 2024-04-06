import React, { useState, useEffect } from 'react';
import Cat from './Cat.jsx';
import CatSearch from './CatSearch.jsx';
import axios from 'axios';

function CatList() {
  const [catList, setCatList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [currentList, setCurrentList] = useState(20);
  const [criteria, setCriteria] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/apiv1/cats')
      .then((response) => {
        setCatList(response.data);
        console.log(response.data);
        setFilteredList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (criteria, searchTerm) => {
    setCriteria(criteria);
    setSearchTerm(Number(searchTerm));

    let filteredCats = catList;

    if (criteria === 'age') {
      const searchAge = parseInt(searchTerm);
      filteredCats = catList.filter(cat => cat.age === searchAge);
    } else if (criteria === 'breed') {
      filteredCats = catList.filter(cat => cat.breed.toLowerCase().includes(searchTerm.toLowerCase()));
    } else if (criteria === 'location') {
      filteredCats = catList.filter(cat => cat.location.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredList(filteredCats);
  };

  return (
    <>
      <div className="bg-blue-800 text-7xl font-bold text-center mt-10 text-white h-35 bg-fixed">
        <h1>Meet Your Purrrrever Friend!</h1>
        <p className="mt-5 text-2xl">If an animal that you have been watching no longer appears on this page, it means that they have found their forever home!</p>
      </div>
      <div>
        <CatSearch handleSearch={handleSearch} />
      </div>
      <div className="bg-blue-100 overflow-auto max-h-[calc(100vh-200px)]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Cat List</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredList.length > 0 ? (
              filteredList.slice(0, currentList).map((cat) => (
                <Cat key={cat.id} cat={cat} />
              ))
            ) : (
              catList.slice(0, currentList).map((cat) => (
                <Cat key={cat.id} cat={cat} />
              ))
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={(e) => setCurrentList(currentList + 10)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-20"
          >
            See More Cats!
          </button>
        </div>
      </div>
    </>
  );
}

export default CatList;
