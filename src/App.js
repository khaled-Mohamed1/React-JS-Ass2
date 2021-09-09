import React, {Component} from 'react';
import './App.css';
import {Ass1, Ass3} from './assignment2';
import OnChange from './onchange';


class App extends Component{

  render(){
    return (
      <div className="App">
        
        <Ass1/>

        <hr/>

        <OnChange/>

        <hr/>

        <Ass3/>

      </div>
    );
  }


}

export default App;
