// import { title } from "process";
import React,{useState, useEffect} from "react";
import "./App.css"


type TDeck={
  title:string,
  _id:string
}


const App: React.FC=()=> {
  const [title, setTitle]=useState('')
  
  // const [title, setTitle]=useState('')[0]for the setValue ===> title
  // const [title, setTitle]=useState('')[1]for the dispacther ===> setTitle

  const [decks, setDecks]=useState<TDeck[]>([])
  
  // when the app.tsx mounts(loads) we want to trigger an api request
  useEffect(()=>{


    
    async function fetchData(){
      const response=await fetch("http://localhost:5000/decks")
      const newDecks=await response.json()
      setDecks(newDecks)
      
    }
    fetchData();  //now u need to store this data, we need a hok that stores an array of this dzta 

    
    // OR
    // (async ()=>{
    //   await fetch("http://localhost:5000/decks")
    // })(); self-calling fn



    // here comes callback
    // console.log("we are here ");

    // // clean up function
    // return ()=>{
    //   console.log("cleanup");
    // }
    
  
  },[]) //here is dependicy arrgument, if empty, only works when it mounts and unmounts(cleansup)



  const handlerCreateDeck= async (e:React.FormEvent)=>{
    e.preventDefault()
    // we need to talk too backend api to preset this deck
  await fetch("http://localhost:5000/decks",{
      method:"POST",
      body:JSON.stringify({
        title,
      }),
      headers:{
        "Content-Type":"application/json",
      }
    })
    setTitle("")
  }
  

  return (
    <div className="App">

      <ul className="decks">
        {
          decks.map((deck:TDeck)=>( //becarful here, need to create "type TDeck" so we can use .title &._id
            <li key={deck._id}>{deck.title}</li>
          ))
        }
      </ul>

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
