import React, { Component } from 'react';
//Link de API de filmes
//https://jsoneditoronline.org/#right=local.cesodi&left=url.https%3A%2F%2Fsujeitoprogramador.com%2Fr-api%2F%3Fapi%3Dfilmes%2F
import './style.css';
import Routes from './routes';



class App extends Component{
  render(){
    return(
      <div className="app">
        <Routes/>
      </div>
    );
  }
}

export default App;
