import './App.css';
import './styles.css'
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
      <h1>Rick and Morty</h1>
      <Grid character={character} />
    </div>
  );
}

export default App;
