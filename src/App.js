import logo from './logo.svg';
import './App.css';
import {robots} from './Assets/robots';
import SearchBox from './Components/SearchBox';
import Cardlist from './Components/Cardlist';
import Scroll from './Components/Scroll';
import { useState,useEffect } from 'react';
function App() {
  const [searchRobo,setsearchRobo] = useState("");
  const [stateRobos,setStateRobos] = useState([]);

  const onSearchChange=(event )=>{
    setsearchRobo(event.target.value);
    console.log(searchRobo);
  }
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      return response.json();
    })
    .then(users=>{
      setStateRobos(users)
    })
  },[])

  const filteredrobot = stateRobos.filter(stateRobos=>{
    return stateRobos.name.toLowerCase().includes(searchRobo.toLowerCase())
  })
  return (
    <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
           <Cardlist robots={filteredrobot} />
        </Scroll>  
    </div>   
  );
}

export default App;
