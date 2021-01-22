import React, { useState, useEffect } from 'react'

const DisplayPokemonList = (props) => {
    return (
        <div>
            {props.pokemonList.map((element, index) => {
                return <div>
                            <h2 key={index}>{element.name}</h2>
                       </div>
            })}
        </div>
    )
}

export default DisplayPokemonList