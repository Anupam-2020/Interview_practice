import React, { useEffect, useState } from 'react'
import { useApi } from './useApi';

const Employee = () => {
    const [employees, setEmployees] = useState([{id: 1, name: 'Anupam'}, {id: 2, name: 'Anand'}]);
    const URL = 'https://jsonplaceholder.typicode.com/users';

    const results = useApi(URL);

    useEffect(() => {
        results
        .then(response => {
          console.log(response);
          setEmployees([...employees, ...response]);
        })
        .catch(err => console.log(err))
        // console.log(employees)
    },[]);

  return (
    <div>
        {employees.map(employee => (<h2>{employee.name}</h2>))}
    </div>
  )
}

export default Employee;