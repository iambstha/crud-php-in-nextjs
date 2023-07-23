"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost/try/backend/op/adduser.php', { name: name, email: email },{
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = '/users';
      })
      .catch((error) => {
        console.error('Error submitting form', error);
      });  };

  return (
    <div className=' flex justify-center items-center flex-col '>
      <h1 className=' text-lg font-semibold my-2 '>Add user</h1>
      <form onSubmit={handleFormSubmit} className=' flex gap-4 ' method='post'>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className='border p-2 rounded outline-none'
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className='border p-2 rounded outline-none'
        />
        <button type="submit" className=' border bg-blue-600 border-blue-600 p-2 px-4 text-white rounded-md '>Submit</button>
      </form>
    </div>
  );
};

export default Page;
