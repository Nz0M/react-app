import { Component } from 'react';
import './App.css';
import Test from './Test.js';

class App extends Component {

  state = {
    presentation: [
     { 
      id: 1,
      nom: 'Martin',
      prenom : 'Enzo'
     }
    ]
}


  render() {
    return (
      <div className="App">
        <h1>Bonjour tout le monde !</h1>
      <Test nom={this.state.presentation}/>
      
      </div>
    );
  }
}

  export default App;
