import React from 'react';
import { PokeService } from '../Services/PokeService.ts';
import { useState } from 'react';

const BaseApp = () => {
    const pokeService = new PokeService();
    const [pokeInfo, setPokeInfo] = useState();
    const [team, setTeam] = useState([]);
    const search = async (e) => {
        e.preventDefault();
        let search = e.target.elements["search"].value.toLowerCase();
        console.log(search);
        await getPokemon(search);
    }
    const getPokemon = async (pokemon) => {
        setPokeInfo(await pokeService.getPokemon(pokemon));
    }
    const addToTeam = () => {
        if (pokeInfo) {
            const name = pokeInfo["name"]
            const item = {name: pokeInfo}
            
        }
    }

  return (
    <div>
        <form onSubmit={event => search(event)}>
            <label>Search: </label>
            <input type='text' id="search" name="search" />
        </form>
        {
            pokeInfo && 
            <div>
                <img src={ pokeInfo["sprites"]["front_default"] } />
                <button>Add to Team</button>
            </div>
        }
        
    </div>
  )
}

export default BaseApp;