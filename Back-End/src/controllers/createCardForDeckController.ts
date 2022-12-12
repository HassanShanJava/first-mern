import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function createCardForDeckController(req: Request, res: Response){
    // 1. geget the deck id
    const deckId=req.params.deckId //deckId pass thrugh url
      

    // 2.fetch deck from mongo
    const deck= await Deck.findById(deckId)
    if(!deck) return res.status(400).send("do data found bro") //error handling

    // 3.card info on body
    const {text}=req.body

    deck.cards.push(text)
    await deck.save()
    res.json(deck)



}

