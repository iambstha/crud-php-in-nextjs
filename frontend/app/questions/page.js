"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../globals.css';

const QuestionsPage = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = () => {
        axios
            .get('http://localhost/try/backend/op/questions.php')
            .then((response) => {
                console.log(response);
                setQuestions(response.data);
            })
            .catch((error) => {
                console.error('Error fetching questions', error);
            });
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost/try/backend/op/delete.php?deleteId=${id}`)
            .then((response) => {
                console.log(response.data);
                setQuestions(questions.filter((user) => user.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting user', error);
            });
    };

    return (
        <div className=' flex flex-col justify-center items-center w-full '>
            <h1 className=' text-lg font-semibold my-2 '>All questions page</h1>
            {/* <table>
                <thead>
                    <tr className=' border bg-slate-100 '>
                        <th className=' p-4 border '>Id</th>
                        <th className=' p-4 border '>Subject</th>
                        <th className=' p-4 border '>Question</th>
                        <th className=' p-4 border '>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question) => (
                        <tr className=' border ' key={question.id}>
                            <td className=' p-4 border '>{question.id}</td>
                            <td className=' p-4 border '>{question.subject}</td>
                            <td className=' p-4 border '>{question.question}</td>
                            <td className=' p-4 border '>
                                <button className=' border border-red-500 bg-red-500 hover:bg-red-800 hover:border-red-800 rounded-full p-3 px-6 text-white ' onClick={() => handleDelete(question.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <form method="post" className=' w-3/4 p-4 '>
                {questions.map((question) => (
                    <div className=' border rounded-lg p-8 m-4 '>
                        <span className=' p-1 px-2 border bg-slate-50 rounded-lg text-xs '>{question.subject}</span>
                        <p className=' text-3xl leading-loose '>{question.question}</p>
                        <label className='option mr-8 '>
                            <input type="radio" name={question.id} value={question.option1} className=' mr-2 ' /> <span class="custom-radio"></span><span class="custom-radio-2"></span> {question.option1}
                        </label>
                        <label className='option mr-8 '>
                            <input type="radio" name={question.id} value={question.option2} className=' mr-2 ' /> <span class="custom-radio"></span><span class="custom-radio-2"></span> {question.option2}
                        </label>
                        <label className='option mr-8 '>
                            <input type="radio" name={question.id} value={question.option3} className=' mr-2 ' /> <span class="custom-radio"></span><span class="custom-radio-2"></span> {question.option3}
                        </label>
                        <label className='option mr-8 '>
                            <input type="radio" name={question.id} value={question.option4} className=' mr-2 ' /> <span class="custom-radio"></span><span class="custom-radio-2"></span> {question.option4}
                        </label>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default QuestionsPage;
