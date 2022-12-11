import { APIUrl } from "./config";

export async function deleteDeck(deckId:string){
    await fetch(`${APIUrl}/decks/${deckId}`,{
      method:"DELETE",
      // body:JSON.stringify({
      //   title,
      // }),
      // headers:{
      //   "Content-Type":"application/json"
      // }

    })
}