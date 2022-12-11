import { Request, Response } from "express";
import Deck from "../models/Deck";


export async function deleteDeckController(req:Request, res:Response){  //someone can put dynamicvalue in url
    // Todo:
    //1.get deck id  fromurl to delete
    const Deckid=req.params.deckId //if u wna get anything froo url use params
    
      //2.delete deck frfom mongoo
    const deck=await Deck.findByIdAndDelete(Deckid)
  
    // res.json({
    //   message:"sucess delete"
    // })
  
    //3.return whatu deleteed to user who made request
    res.json(deck) //return what u delete
}