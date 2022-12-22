import logo from './logo.svg';
import './App.css';
import {robots} from './Assets/robots';
import SearchBox from './Components/SearchBox';
import Cardlist from './Components/Cardlist';
import { useState } from 'react';
function App() {
  const [searchRobo,setsearchRobo] = useState("");
  const [stateRobos,setStateRobos] = useState(robots);

  const onSearchChange=(event )=>{
    setsearchRobo(event.target.value);
    console.log(searchRobo);
  }
  const filteredrobot = stateRobos.filter(stateRobos=>{
    return stateRobos.name.toLowerCase().includes(searchRobo.toLowerCase())
  })
  return (
    <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Cardlist robots={filteredrobot} />
    </div>   
  );
}

export default App;
