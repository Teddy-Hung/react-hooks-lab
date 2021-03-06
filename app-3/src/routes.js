import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DisplayPokemonList from './DisplayPokemonList'
import Pokemon from './Pokemon'

export default (
    <Switch>
        <Route exact path='/' component={DisplayPokemonList} />
        <Route exact path='/pokemon/:name' component={Pokemon}/>
    </Switch>
)