import React from 'react'
import useFetch from '../../utils/useFetch';

const GithubUsers = () => {

    const url = 'https://fakestoreapi.com/users';
    const {users, loading, error} = useFetch(url);

    // console.log(data);
    if(loading) return (<h2>Loading...</h2>)

  return (
    <div>
        {users ? users?.map(user => {
            return (
                <>
                  <p>{user.username}</p>
                </>
        )
    }) : (<h2>{error}</h2>) }</div>
  )
}

export default GithubUsers;