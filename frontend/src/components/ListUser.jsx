import React from 'react'

const ListUser = () => {
return (
    <div className="p-5 max-w-lg mx-auto font-sans">
        <h1 className="text-center text-gray-800 text-2xl mb-5">List of Users</h1>
        <form className="flex flex-col items-center gap-3">
            <label className="font-bold text-start mb-1">Name:</label>
            <input type="text" name="name" placeholder="Enter Name" className="p-2 w-full max-w-md rounded border border-gray-300" />
            
            <label className="font-bold mb-1">Email:</label>
            <input type="email" name="email" placeholder="Enter Email" className="p-2 w-full max-w-md rounded border border-gray-300" />
            
            <label className="font-bold mb-1">Mobile:</label>
            <input type="text" name="mobile" placeholder="Enter Mobile" className="p-2 w-full max-w-md rounded border border-gray-300" />
            
            <button className="p-2 px-4 rounded border-none bg-blue-500 text-white cursor-pointer">Submit</button>
        </form>
    </div>
)
}

export default ListUser