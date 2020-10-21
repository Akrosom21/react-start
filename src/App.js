import React from 'react';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
