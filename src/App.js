import React, {useEffect, useState, useMemo} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [targetType, setTargetType] = useState([]);

  useEffect(() => {
    getTargetPokemon();
  }, []);
  
  const getTargetPokemon = async () => {
    let target = Math.floor(Math.random() * 152);
    const data = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${target}`
      const res =  await axios.get(url)
      data.push(res.data);
      if (res.data.types.length == 1) {
        setTargetType([res.data.types[0].type.name])
      }
      else {
        setTargetType([res.data.types[0].type.name,res.data.types[1].type.name])
      }
      setTargetData(data)
      console.log(res.data.name)
    } catch (error) {
      console.log(error)
    }
  }
 
 

  const getPokemon = async () => {
    const data = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      data.push(res.data);
      if (res.data.types.length == 1) {
        setPokemonType([res.data.types[0].type.name])
      }
      else {
        setPokemonType([res.data.types[0].type.name,res.data.types[1].type.name])
      }
      setPokemonData(data)
    } catch (error) {
      console.log(error)
    }
  }

 
  function type2() {
    let type2 = document.getElementById("type2")
    console.log(type2)
    if (pokemonType.length == 1) {
       type2.innerHTML = "None"
    }
    else {
       type2.innerHTML = capitalize(pokemonType[1])
    }
    return type2
  }
  
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon()
    isCorrect()
  }

  const isCorrect  = ()  => {
    console.log(pokemonData[0].name)
    console.log(targetData[0].name)
    if (pokemonData[0].name == targetData[0].name) {
      alert("You have guessed correctly!")
    }
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
                <div className = "tableCell field" id = "type1"> {capitalize(pokemonType[0])} </div>
              </div>
              <div className = "tableRow"> 
                <div className = "tableCell"> Type 2</div>
                <div className = "tableCell field" id = "type2"> filler {targetType[0]}</div>
              </div>
              <div className = "tableRow"> 
                <div className = "tableCell"> Height </div>
                <div className = "tableCell field" id = "height"> {Math.round(data.height * 3.9)}"</div>
              </div>
              <div className = "tableRow"> 
                <div className = "tableCell"> Weight </div>
                <div className = "tableCell field" id = "weight"> {Math.round(data.weight / 4.3)} lbs </div>
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
