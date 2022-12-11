import { APIUrl } from "./config";

export async function createDeck(title:string){
    const res=await fetch(`${APIUrl}/decks`, {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json()
}