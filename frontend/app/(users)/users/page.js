"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get('http://localhost/try/backend/op/users.php')
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users', error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost/try/backend/op/delete.php?deleteId=${id}`)
      .then((response) => {
        console.log(response.data);
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting user', error);
      });
  };

  return (
    <div className=' flex flex-col justify-center items-center '>
      <h1 className=' text-lg font-semibold my-2 '>All users page</h1>
      <table>
        <thead>
          <tr className=' border bg-slate-100 '>
            <th className=' p-4 border '>Id</th>
            <th className=' p-4 border '>Name</th>
            <th className=' p-4 border '>Email</th>
            <th className=' p-4 border '>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className=' border ' key={user.id}>
              <td  className=' p-4 border '>{user.id}</td>
              <td  className=' p-4 border '>{user.name}</td>
              <td  className=' p-4 border '>{user.email}</td>
              <td  className=' p-4 border '>
                <button className=' border border-red-500 bg-red-500 hover:bg-red-800 hover:border-red-800 rounded-full p-3 px-6 text-white ' onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
