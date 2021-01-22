import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const DisplayPokemonList = () => {

    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            setPokemonList(res.data.results)
        })
    }, [])

    return (
        <div>
            {pokemonList.map((element, index) => {
                return <div>
                            <Link key={index} to={`/pokemon/${element.name}`} pokemonURL={element.url}>
                                <h2>{element.name}</h2>
                            </Link>
                       </div>
            })}
        </div>
    )
}

export default DisplayPokemonList