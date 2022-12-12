import { APIUrl } from "./config";
import { TDeck } from "./getDeck";

export async function createCard(deckId: string, text: string): Promise<TDeck> {
  const response = await fetch(`${APIUrl}/decks/${deckId}/cards`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}