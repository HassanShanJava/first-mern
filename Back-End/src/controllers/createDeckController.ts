import { Request, Response } from "express";
import Deck from "../models/Deck";

export async function createDeckController(req: Request, res: Response){
    // res.set
    // res.send("Hello world");
    
    // we create new model and add it to db
    // console.log(req.body);
      
    const newDeck=new   Deck({
      title:req.body.title
    }) //oop
  
    // now its saved in db
    const createdDeck= await  newDeck.save() //we get uniqe id in mongo collection
    res.json(createdDeck)
}