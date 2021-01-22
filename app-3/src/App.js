import React, { useState, useEffect } from 'react'
import DisplayPokemonList from './DisplayPokemonList'
import routes from './routes'
import './App.css';

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
