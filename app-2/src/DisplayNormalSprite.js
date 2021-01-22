import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayNormalSprite = (props) => {
    const [spriteURL, setSpriteURL] = useState('')

  useEffect(() => {
    axios.get(props.pokemonURL)
      .then(res => {
        setSpriteURL(res.data.sprites.front_default)
      })
  }, [])
    return(
        <div>
            <img src={spriteURL} alt='normal sprite image'/>
        </div>
    )
}

export default DisplayNormalSprite