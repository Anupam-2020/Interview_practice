import React, { useContext } from 'react'
import { Context } from './context';

function Users() {
    const {userList} = useContext(Context);
    console.log(userList);
  return (
    <div>
        {userList.map(user => {
            return (
                <div>{user.name}</div>
            )
        })}
    </div>
  )
}

export default Users;