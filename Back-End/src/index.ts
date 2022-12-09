import {config} from "dotenv" //for typescript compliance
config()

import express, { application, Request, Response } from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";


import cors from "cors"

const app = express();

// npm dotenv


const PORT=5000;

// successfully made api to send msg

//2nd Api


// now building api for resource with crud operatioons
// app.get("/decks", (req: Request, res: Response) => {
//   // res.set
//   res.send("Hello world");
// });



//everytime to mke an api, a set of headers go to the backend



app.use(cors({
  origin:"*",  //anyone can access
}))
app.use(express.json()) //express middleware function for support


// new  endpoint

// when fetch data-->get requeust
// when push data-->post requeust
app.get("/decks", async(req: Request, res: Response)=>{

  // to fetch all decks & send  to user
  // 1. detahdata from mongo
  const deck= await Deck.find() //you can also add reex and be more specific here 
  console.log(deck); //change thunderbt to get method, it crashes but youu can see the console log
  
  // 2. send data to user in array
  res.json(deck) //now fiure out, how to fetch it from the front end
}
)

// use post to createbrand new resoucre
app.post("/decks", async(req: Request, res: Response) => {
  // res.set
  // res.send("Hello world");
  
  // we create new model and add it to db
  console.log(req.body);
  

  const newDeck=new   Deck({
    title:req.body.title
  }) //oop

  // now its saved in db
  const createdDeck= await  newDeck.save() //we get uniqe id in mongo collection
  res.json(createdDeck)
});

// 1st api
// app.get("/", (req: Request, res: Response) => {
//   res.send("Sup Bro :)");
// });

// this is a promise
// so its some asynch code
mongoose.connect(
  process.env.MONGO_URL ?? ""   //for typescript err
).then(()=>{
    console.log(`listening to post ${PORT}`);
    
    app.listen(PORT); //the is api: http://localhost:5000/
})

