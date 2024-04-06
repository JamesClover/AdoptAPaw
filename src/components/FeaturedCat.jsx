import React, { useState, useEffect } from 'react';
import axios from "axios";

function FeaturedCat() {

  const randomCatId = Math.floor(Math.random() * 2000) + 1;
  const [featuredCat, setFeaturedCat] = useState({});

  useEffect(() => {
    axios.get(`/apiv1/cats/${randomCatId}`)
  .then((response) => {
    setFeaturedCat(response.data[0]);
    console.log("feature Cat::!", response.data);
  })
  .catch((error) => {
    console.error('Error getting featured cat:', error);
  })
},[]);


return (
  <div className="bg-blue-100 flex flex-col items-center mx-auto">
    <h1 className="text-4xl mt-10">Meet {featuredCat.name}, Our Featured Cat of the Day!</h1>
    <h3 className="mt-4 text-xl font-medium text-gray-900">Name: {featuredCat.name}</h3>
    <img src={featuredCat.image} alt={`Picture of ${featuredCat.name}`} className="h-60 w-80 object-cover object-center group-hover:opacity-75" />
    <p className="mt-1 text-xl font-medium text-gray-900">Gender: {featuredCat.gender}</p>
    <p className="mt-1 text-xl font-medium text-gray-900">Age: {featuredCat.age}</p>
    <p className="mt-1 text-xl font-medium text-gray-900">Location: {featuredCat.location}</p>
    <p className="mt-1 text-xl font-medium text-gray-900">Description: {featuredCat.description}</p>
    <p className="mt-1 text-xl font-medium text-gray-900">Temperament: {featuredCat.temperment}</p>
  </div>
);
}

export default FeaturedCat;