import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);

  const getPokemon = async () => {
    const data = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      console.log(res)
      data.push(res.data);
      if (res.data.types.length == 1) {
        setPokemonType([res.data.types[0].type.name])
      }
      else {
        setPokemonType([res.data.types[0].type.name,res.data.types[1].type.name])
      }
      setPokemonData(data)

      let type2 = document.getElementById("type2")
      if (res.data.types.length == 1) {
        type2.innerHTML = "none"
      }
      else {
        type2.innerHTML = res.data.types[1].type.name
      }
    } catch (error) {
      console.log(error)
    }
  }

 

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon()
  }

  return (
    <div className="App">
      <h1>Pokemon Wordle</h1>
      <form onSubmit = {handleSubmit}>
        <label>
          <input type = "text" onChange = {handleChange} placeholder = "Enter Pokemon Name">

          </input>
        </label>
      </form>
      {pokemonData.map((data) =>  {
        return(
          <div className = "container">
            <img src = {data.sprites["front_default"]}/>
            <div className = "table"> 
              <div className = "tableBody">

              <div className = "tableRow"> 
                <div className = "tableCell"> Type 1</div>
                <div className = "tableCell"> {pokemonType[0]} </div>
              </div>
              <div className = "tableRow"> 
                <div className = "tableCell"> Type 2</div>
                <div className = "tableCell" id = "type2"> </div>
              </div>
              <div className = "tableRow"> 
                <div className = "tableCell"> Height </div>
                <div className = "tableCell"> {Math.round(data.height * 3.9)}"</div>
              </div>
              <div className = "tableRow"> 
                <div className = "tableCell"> Weight </div>
                <div className = "tableCell"> {Math.round(data.weight / 4.3)} lbs </div>
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
}

export default App;
