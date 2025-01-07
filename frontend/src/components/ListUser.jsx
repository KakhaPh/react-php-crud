import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListUser = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/api/users').then(function(response) {
            // console.log(response.data);
            setUsers(response.data);
        })
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/user/${id}/delete`).then(function(response) {
            // console.log(response.data);
            getUsers();
        })
    }

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">List Users</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Id</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{user.id}</td>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className=" border-b">
                                <Link to={`user/edit/${user.id}`}><button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button></Link>
                                <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => {deleteUser(user.id)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListUser