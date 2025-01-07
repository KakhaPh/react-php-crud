import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputs);
        axios.post('http://localhost/api/user/save', inputs).then(response => {
            console.log(response.data);
            navigate('/');
        });
    }

    return (
        <div className="p-5 max-w-lg mx-auto font-sans">
            <h1 className="text-center text-gray-800 text-2xl mb-5">List of Users</h1>
            <form className="flex flex-col items-center gap-3" onSubmit={handleSubmit}>
                <label className="font-bold text-start mb-1">Name:</label>
                <input type="text" name="name" placeholder="Enter Name" onChange={handleChange} className="p-2 w-full max-w-md rounded border border-gray-300" />

                <label className="font-bold mb-1">Email:</label>
                <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} className="p-2 w-full max-w-md rounded border border-gray-300" />

                <label className="font-bold mb-1">Mobile:</label>
                <input type="text" name="mobile" placeholder="Enter Mobile" onChange={handleChange} className="p-2 w-full max-w-md rounded border border-gray-300" />

                <button className="p-2 px-4 rounded border-none bg-blue-500 text-white cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser