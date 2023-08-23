import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [apiData, setApiData] = useState([]);
  const [item, setItem] = useState('smartphones');

  const fetchData = async () => {
    try{
      const response = await fetch(`https://dummyjson.com/products/category/${item}`);
    const data = await response.json();
    setApiData(data.products);
    console.log(data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const id = setTimeout(() => {
      fetchData()
    },1000)

    return () => {
      clearTimeout(id)
    }
  },[item]);


  const inputHandler = (event) => {
    setItem(event.target.value = event.target.value === null ? 'smartphones' : event.target.value)
  }

  return (
    <div className="App">
      {apiData ? apiData.map((data,index) => {
        return (
          <p key={index}>{data.title}</p>
        )
      }) : (<p>check id</p>)}
      <input placeholder='type in something' onChange={inputHandler} value={item}/>
    </div>
  );
}

export default App;