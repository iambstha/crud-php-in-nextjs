"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correct_answer,setCorrectAnswer] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost/try/backend/op/addquestion.php', 
      { 
        subject : subject, 
        question: question, 
        option1: option1, 
        option2:option2, 
        option3:option3,
        option4:option4,
        correct_answer:correct_answer 
    },{
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then((response) => {
        console.log(response.data);
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error submitting form', error);
      });  };

  return (
    <div className=' flex justify-center items-center flex-col w-full '>
      <h1 className=' text-lg font-semibold my-2 '>Add user</h1>
      <form onSubmit={handleFormSubmit} className=' flex gap-4 flex-col w-1/2 ' method='post'>
        <input type="text" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Enter subject" className='border p-2 rounded outline-none w-full'/>
        <input type="text" name="question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Enter question" className='border p-2 rounded outline-none w-full'/>
        <input type="text" name="option1" value={option1} onChange={(event) => setOption1(event.target.value)} placeholder="Enter option 1" className='border p-2 rounded outline-none w-full'/>
        <input type="text" name="option2" value={option2} onChange={(event) => setOption2(event.target.value)} placeholder="Enter option 2" className='border p-2 rounded outline-none w-full'/>
        <input type="text" name="option3" value={option3} onChange={(event) => setOption3(event.target.value)} placeholder="Enter option 3" className='border p-2 rounded outline-none w-full'/>
        <input type="text" name="subject" value={option4} onChange={(event) => setOption4(event.target.value)} placeholder="Enter option 4" className='border p-2 rounded outline-none w-full'/>
        <input type="text" name="correct_answer" value={correct_answer} onChange={(event) => setCorrectAnswer(event.target.value)} placeholder="Enter correct option" className='border p-2 rounded outline-none w-full'/>
        <button type="submit" className=' border bg-blue-600 border-blue-600 p-2 px-4 text-white rounded-md '>Submit</button>
      </form>
    </div>
  );
};

export default Page;
