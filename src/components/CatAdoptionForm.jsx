import React, { useState } from 'react';

function CatAdoptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    petExperience: '',
    petCount: '',
    indoorOutdoor: '',
    otherPets: '',
    reasonForAdoption: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      address: '',
      city: '',
      phone: '',
      email: '',
      petExperience: '',
      petCount: '',
      indoorOutdoor: '',
      otherPets: '',
      reasonForAdoption: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Cat Adoption Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block font-semibold mb-1">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block font-semibold mb-1">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block font-semibold mb-1">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="petExperience" className="block font-semibold mb-1">Pet Ownership Experience:</label>
          <textarea
            id="petExperience"
            name="petExperience"
            value={formData.petExperience}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="petCount" className="block font-semibold mb-1">Number of Pets in Household:</label>
          <input
            type="number"
            id="petCount"
            name="petCount"
            value={formData.petCount}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="indoorOutdoor" className="block font-semibold mb-1">Will the Cat Be Kept Indoors or Outdoors?</label>
          <select
            id="indoorOutdoor"
            name="indoorOutdoor"
            value={formData.indoorOutdoor}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="Indoors">Indoors</option>
            <option value="Outdoors">Outdoors</option>
            <option value="Both">Both</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="otherPets" className="block font-semibold mb-1">Other Pets in Household:</label>
          <input
            type="text"
            id="otherPets"
            name="otherPets"
            value={formData.otherPets}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="reasonForAdoption" className="block font-semibold mb-1">Reason for Adoption:</label>
          <textarea
            id="reasonForAdoption"
            name="reasonForAdoption"
            value={formData.reasonForAdoption}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}

export default CatAdoptionForm;
