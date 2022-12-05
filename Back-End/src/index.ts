import express, { Request, Response } from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";

const app = express();


const PORT=5000;

// successfully made api to send msg

//2nd Api


// now building api for resource with crud operatioons
// app.get("/decks", (req: Request, res: Response) => {
//   // res.set
//   res.send("Hello world");
// });

app.use(express.json()) //express middleware function for support


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
  "mongodb+srv://flahcard-mern:hs2232000@cluster0.hah9p8r.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    console.log(`listening to post ${PORT}`);
    
    app.listen(PORT); //the is api: http://localhost:5000/
})

