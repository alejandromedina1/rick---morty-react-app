import { useState } from 'react'
import imageRickMorty from "./img/rick-morty.png"
import './App.css'
import Characters from './components/Characters'

function App() {
  const [characters, setCharacters] = useState(null)

  const reqAPI = async() => {
    const API = await fetch('https://rickandmortyapi.com/api/character')
    const characterAPI = await API.json()
    setCharacters(characterAPI.results)
    
  }

  console.log(characters)
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='title'>Rick & Morty</h1>
          {characters? (
            <Characters characters={characters} setCharacters={setCharacters}/>
          ) : (
            <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
            <button onClick={reqAPI} className='btn-search'> Buscar Personajes</button>
            </>
          )}
        </header>
      </div>
    </>
  )
}

export default App
