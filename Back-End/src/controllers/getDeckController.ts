import { Request, Response } from "express";
import Deck from "../models/Deck";


export async function getDeckController(req: Request, res: Response){

    // to fetch all decks & send  to user
    // 1. detahdata from mongo
    const deck= await Deck.find() //you can also add reex and be more specific here 
    console.log(deck); //change thunderbt to get method, it crashes but youu can see the console log
    
    // 2. send data to user in array
    res.json(deck)

}