import React, { useState, useMemo } from 'react';

// Memoization is the technique taht helps to make heavy computation process more efficent like rendering list...
// It does by storing computation results in cache and retrieving that same info from cache the next time...

function Users() {
    const usersList = [
        {id: 1, name: 'S1'},
        {id: 2, name: 'S2'},
        {id: 3, name: 'S3'},
        {id: 4, name: 'S4'}
    ]

    const [users, setusers] = useState(usersList);
    const [count, setCount] = useState(0);


    const buttonHanlder = () => {
        setCount(count => count+1);
    }

    const inputHandler = (event) => {
        setusers([
            ...users,
            {
                id: users.length+1,
                name: event
            }
        ])
    }

    const displayList = useMemo(() => {
        console.log('render');
        return (
            users.map((user) => {
                return(
                    <div key={user.id}>{user.name}</div>
                )
            })
        )
    },[users]);


  return (
    <div>
        <h2>{count}</h2>
        <button onClick={buttonHanlder}>Increment</button>
        <input placeholder='enter name' onBlur={(e) => inputHandler(e.target.value)}/>
        {displayList}
    </div>
  )
}

export default Users;
