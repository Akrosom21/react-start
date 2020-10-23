import React from 'react';
import Main from './Components/Main/Main.jsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from "./Components/Header/HeaderContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
