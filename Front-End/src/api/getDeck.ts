import { APIUrl } from "./config";

export type TDeck = {
    title: string;
    cards: string[];
    _id: string;
};

export async function getDeck():Promise<TDeck[]>{
    const response = await fetch(`${APIUrl}/decks`);
    return response.json();
      
}