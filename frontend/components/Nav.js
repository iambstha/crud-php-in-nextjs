import React from 'react'

const Nav = () => {
  return (
    <nav className=' flex p-2 w-full '>
        <ul className='flex w-full gap-4 p-4 justify-center items-center border'>
            <li><a href="/">Home</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/add-user">Add User</a></li>
            <li><a href="/questions">Questions</a></li>
            <li><a href="/add-question">Add Question</a></li>
        </ul>
    </nav>
  )
}

export default Nav