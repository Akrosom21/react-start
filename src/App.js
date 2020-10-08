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
        <Main 
        userData={props.state.messagesPage.userData} 
        dialogData={props.state.messagesPage.dialogData} 
        dialogSymbol={props.state.messagesPage.dialogSymbol} 
        postData={props.state.profilePage.postData}
        postSymbol={props.state.profilePage.postSymbol}
        dispatch={props.dispatch} />
      </div>
    </BrowserRouter>
  );
}

export default App;
