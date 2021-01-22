import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayShinySprite = (props) => {
    const [spriteURL, setSpriteURL] = useState('')

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`)
      .then(res => {
        setSpriteURL(res.data.sprites.front_shiny)
      })
  }, [])
    return(
        <div>
            <img src={spriteURL } alt='shiny sprite image'/>
        </div>
    )
}

export default DisplayShinySprite