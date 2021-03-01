import React, {useEffect , useState} from 'react'
import axios from 'axios';

import "./pokemon.css"

function Pokemon() {

    const [pokemon, setPokemon] = useState( { 
        types : [] , stats : []
     } )

  

    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => setPokemon(response.data) )
        .catch (err => "kesalahan")

    }, [])


    return (
        <div className="pokemon">
            
           <h3> {pokemon.name} </h3>

           <p className="element"> Element: </p>
           { pokemon.types && pokemon.types.map((items,id) => (

               <p  key={id} className="types">{items.type.name}</p>

           )) } 

            <div className="attribute">
             { pokemon.stats.map((items,id) => {

              return    <div key={id} className="stats"> 
                            <p>{items.stat.name}</p> 
                            <p>{items.base_stat}</p>
                        </div>
              
            }) }
            </div>


        
        </div>
    )
}

export default Pokemon
