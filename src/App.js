import React, {useEffect, useState, useMemo} from "react";
import './App.css';
import axios from "axios";
import CorrectType1 from "./CorrectType1";
import CorrectType2 from "./CorrectType2";
import CorrectWeight from "./CorrectWeight";
import CorrectHeight from "./CorrectHeight";
import Result from "./Result";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [targetType, setTargetType] = useState([]);
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    getTargetPokemon();
    document.title = "Who's That Pokémon?";
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
      setCounter(counter + 1)
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
      <div className = "header"> 
        <div className = "rules"> 
          <p id = "rules"> RULES:</p>
          <ul>
            <p className = "correct">Correct</p>
            <p className = "wrong">Incorrect</p>
            <p className = "high">Too High</p>
            <p className = "low">Too Low</p>
          </ul>
          
        </div>
        <h1>Who's That Pokémon?</h1>
        <div className = "rules"> 
          <p id = "rules"> RULES:</p>
          <ul>
            <p className = "correct">Correct</p>
            <p className = "wrong">Incorrect</p>
            <p className = "high">Too High</p>
            <p className = "low">Too Low</p>
          </ul>
          
        </div>
      </div>
        <form onSubmit = {handleSubmit}>
          <label>
            <input type = "text" onChange = {handleChange} placeholder = "Enter Pokémon Name">
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
                  <div className = "tableCell"> Type 1 </div>
                  <CorrectType1 targetType = {targetType[0]} chosenType = {pokemonType[0]}/>
                </div>
                <div className = "tableRow"> 
                  <div className = "tableCell"> Type 2 </div>
                  <CorrectType2 targetType = {targetType[1]} chosenType = {pokemonType[1]}/>
                </div>
                <div className = "tableRow"> 
                  <div className = "tableCell"> Height </div>
                  <CorrectHeight targetHeight = {Math.round(targetData[0].height * 3.93701)} chosenHeight = {Math.round(data.height * 3.93701)}/>
                </div>
                <div className = "tableRow"> 
                  <div className = "tableCell"> Weight </div>
                  <CorrectWeight targetWeight = {Math.round(targetData[0].weight / 4.53592 * 10) / 10} chosenWeight = {Math.round(data.weight / 4.53592 * 10) / 10}/>
                </div>
                <Result targetName = {targetData[0].name} chosenName = {pokemonData[0].name} counter = {counter}/>
              </div>
            </div>
          </div>
          )
        })}
        <div className = "container">
          <a className href="https://pokemondb.net/pokedex/stats/height-weight">Pokémon Database</a>
        </div>
      
    </div>
  );
}

export default App;
