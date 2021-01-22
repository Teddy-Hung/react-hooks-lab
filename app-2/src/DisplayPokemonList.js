import React, { useState, useEffect } from 'react'
import DisplayNormalSprite from './DisplayNormalSprite'
import DisplayShinySprite from './DisplayShinySprite'

const DisplayPokemonList = (props) => {
    return (
        <div>
            {props.pokemonList.map((element, index) => {
                return <div>
                            <h2 key={index}>{element.name}</h2>
                            <div className='sprite-box'>
                                <DisplayNormalSprite pokemonURL={element.url}/>
                                <DisplayShinySprite pokemonURL={element.url}/>
                            </div>
                            
                            
                       </div>
            })}
        </div>
    )
}

export default DisplayPokemonList