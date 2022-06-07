import './App.css';
import './styles.css';
import logo from './Rick_and_Morty.svg'
import axios from 'axios';
import { useState, useEffect } from 'react';


import Grid from './components/grid';

function App() {

  const [character, setCharacter] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");

    setCharacter(res.data);
  } 

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div className="App">
      <img src={logo} alt="" className='logo'/>
      <Grid character={character} />
    </div>
  );
}

export default App;
