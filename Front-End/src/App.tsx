// import { title } from "process";
import React,{useState} from "react";
import "./App.css"

const App: React.FC=()=> {
  const [title, setTitle]=useState('')

  const handlerCreateDeck=(e:React.FormEvent)=>{
    e.preventDefault()
    // we need to talk too backend api to preset this deck
    fetch("http://localhost:5000/decks",{
      method:"POST",
      body:JSON.stringify({
        title,
      })
    })
  }
  

  return (
    <div className="App">
      <form onSubmit={handlerCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setTitle(e.target.value)
          }}
        />
        <button>Create Deck</button>

      </form>
    </div>
  );
}


export default App;
