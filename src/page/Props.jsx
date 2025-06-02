import React from 'react'
import UserCard from './components/UserCard';
import { useState } from 'react'
export default function Props() {
    const [count, setCount] = useState(0)
    const users = [
        {id:1, name: "Shoqan", age: 20},
        {id:2, name: "Bakhredin", age: 15},
        {id:3, name: "Bakh", age: 21}
    ];
  return (
        <div> 
            <p>{count}</p>
            <h1>Users</h1>
            {users.map((user) => {
                console.log(user);
                return(<UserCard name = {user.name} age = {user.age} ></UserCard>) 
            })}
            <button onClick={() => setCount(count + 1)}> Add</button>
        </div>
      
  )
}

