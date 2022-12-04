import express, { Request, Response } from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";

const app = express();


const PORT=5000;

// successfully made api to send msg

//2nd Api
app.get("/hello", (req: Request, res: Response) => {
  // res.set
  res.send("Hello world");
});

// 1st api
app.get("/", (req: Request, res: Response) => {
  res.send("Sup Bro :)");
});

// this is a promise
// so its some asynch code
mongoose.connect(
  "mongodb+srv://flahcard-mern:hs2232000@cluster0.hah9p8r.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    console.log(`listening to post ${PORT}`);
    
    app.listen(PORT); //the is api: http://localhost:5000/
})

