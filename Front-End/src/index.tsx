import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Deck from './Deck';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  
  },
  {
    path: "/decks/:deckId",
    element: <Deck />,
  
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

