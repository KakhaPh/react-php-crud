import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const {id} = useParams();

  function getUser() {
    axios.get(`http://localhost/api/user/${id}`).then(function (response) {
      // console.log(response.data);
      setInputs(response.data);
    })
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(inputs);
    axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(response => {
      // console.log(response.data);
      navigate('/');
    });
  }

  return (
    <div className="p-5 max-w-lg mx-auto font-sans">
      <h1 className="text-center text-gray-800 text-2xl mb-5">Edit User N {id}</h1>
      <form id='editForm' className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
        <label className="font-bold text-start mb-1">Name:</label>
        <input value={inputs.name || ""} type="text" name="name" placeholder="Enter Name" onChange={handleChange} className="p-2 w-full max-w-md rounded border border-gray-300" />

        <label className="font-bold mb-1">Email:</label>
        <input value={inputs.email || ""} type="email" name="email" placeholder="Enter Email" onChange={handleChange} className="p-2 w-full max-w-md rounded border border-gray-300" />

        <label className="font-bold mb-1">Mobile:</label>
        <input value={inputs.mobile || ""} type="text" name="mobile" placeholder="Enter Mobile" onChange={handleChange} className="p-2 w-full max-w-md rounded border border-gray-300" />

        <button className="p-2 px-4 rounded border-none bg-blue-500 text-white cursor-pointer">Submit</button>
      </form>
    </div>
  )
}

export default EditUser