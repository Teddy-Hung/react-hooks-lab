import React, { useState, useEffect } from 'react'
import DisplayPokemonList from './DisplayPokemonList'
import axios from 'axios'
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        setPokemonList(res.data.results)
      })
  }, [])

  return (
    <div className="App">
      <DisplayPokemonList pokemonList={pokemonList}/>
    </div>
  );
}

export default App;
