import {config} from "dotenv" //for typescript compliance
config()

import express from "express";
import mongoose from "mongoose";

// import Deck from "./models/Deck";


import cors from "cors"
import { getDeckController } from "./controllers/getDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";

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
app.get("/decks", getDeckController)

// use post to createbrand new resoucre
app.post("/decks", );

// 1st api
// app.get("/", (req: Request, res: Response) => {
//   res.send("Sup Bro :)");
// });


// delete endpoint
app.delete("/decks/:deckId", deleteDeckController)




// this is a promise
// so its some asynch code
mongoose.connect(
  process.env.MONGO_URL ?? ""   //for typescript err
).then(()=>{
    console.log(`listening to post ${PORT}`);
    
    app.listen(PORT); //the is api: http://localhost:5000/
})

