import { create } from "domain";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createDeck } from "./api/createDeck";
import { deleteDeck } from "./api/deleteDeck";
import { getDeck, TDeck } from "./api/getDeck";
import "./App.css";


const App: React.FC = () => {
  const [title, setTitle] = useState("");
  // const [title, setTitle]=useState('')[0]for the setValue ===> title
  // const [title, setTitle]=useState('')[1]for the dispacther ===> setTitle
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function handleDelete(deckId:string) {
    // request backend to delte
    await deleteDeck(deckId)
    //refetch all todos so it loads again
    // OR
    //OPTIMISTIC UPDATE---->do sthing with setDecks
    setDecks(decks.filter((deck)=>deck._id!==deckId))
  }

  // when the app.tsx mounts(loads) we want to trigger an api request
  useEffect(() => {//runs on load
    async function fetchData() {
      // const response = await fetch("http://localhost:5000/decks");
      const newDecks = await getDeck()
      // setDecks([...decks, newDecks])
      setDecks(newDecks);
    }
    fetchData(); //now u need to store this data, we need a hok that stores an array of this dzta

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
  }, []); //here is dependicy arrgument, if empty, only works when it mounts and unmounts(cleansup)

  const handlerCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    // we need to talk too backend api to preset this deck
    const deck=await createDeck(title)
    setDecks([...decks,deck])
    setTitle("");
  };

  return (
    <div className="App">
      <ul className="decks">
        {decks.map(
          (
            deck: TDeck //becarful here, need to create "type TDeck" so we can use .title &._id
          ) => (
            <li key={deck._id}>
              <button onClick={() => handleDelete(deck._id)}>X</button>
              {/* {deck.title} */}
              <Link to={`decks/${deck._id}`}>{deck.title}</Link>
            </li>
          )
        )}
      </ul>

      <form onSubmit={handlerCreateDeck}> {/* Runs on enter */}
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
};

export default App;
