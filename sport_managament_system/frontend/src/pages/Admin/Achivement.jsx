import React, { useState } from 'react';


const Achivement = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <div className='bgImage  pt-[30px] pb-[30px]'>
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg md:max-w-lg lg:max-w-xl">
        <label className="block mb-2 text-sm font-bold text-gray-600">
          Game Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>


        <label className="block mb-2 text-sm font-bold text-gray-600">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2 text-sm font-bold text-gray-600">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="block mb-2 text-sm font-bold text-gray-600">
          Game Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>


        <label className="block mb-2 text-sm font-bold text-gray-600">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2 text-sm font-bold text-gray-600">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </label>
        <br />
        <div className='flex justify-center gap-5'>
          <button
            type="submit"
            className="w-20 p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleSubmit}
          >
            Add
          </button>
          <button
            type="submit"
            className="w-20 p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleSubmit}
          >
            Update
          </button>
          <button
            type="submit"
            className="w-20 p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleSubmit}
          >
            Delete
          </button>
        </div>

      </form>
    </div>

  )
}

export default Achivement