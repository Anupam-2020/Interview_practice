import React from 'react'
import { UserProvier } from './context'
import Users from './Users'

function UserDashboard() {
  return (
    <UserProvier>
        <Users />
    </UserProvier>
  )
}

export default UserDashboard