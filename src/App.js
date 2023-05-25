import React, { useEffect, useState } from 'react';
import "./styles/App.css"
import Navigation from './navigation_bar/Navigation.js';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./navigation_bar/AppRouter.js"

function App() {
  

  return (
    <React.StrictMode>
    <BrowserRouter>
      <Navigation/>
      <AppRouter/>
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;