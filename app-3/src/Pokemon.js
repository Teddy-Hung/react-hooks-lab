import React, { useState, useEffect } from 'react'
import DisplayNormalSprite from './DisplayNormalSprite'
import DisplayShinySprite from './DisplayShinySprite'

const Pokemon = (props) => {
    const { name } = props.match.params
    return(
        <div>
            <h2>{name}</h2>
            <div className='sprite-box'>
                <DisplayNormalSprite pokemonName={name}/>
                <DisplayShinySprite pokemonName={name}/>
            </div>
        </div>
    )
}

export default Pokemon