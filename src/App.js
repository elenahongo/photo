import React from 'react';
import { Cuadros } from './components/Cuadros/Cuadros';
import { Menu } from './components/Menu/Menu';
import './App.css';

const CUADROS = {
  
    black: './components/frames/black-frame.jpg',
    white: './components/frames/white-frame.png',
    natural: './components/frames/wood-frame.jpg',
    brown: './components/frames/brown-frame.jpg',  
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: CUADROS.natural };
    this.changeSource = this.changeSource.bind(this)
  }
  
  changeSource(source){
    this.setState({ src: CUADROS[source] })
  }
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu onChange={this.changeSource}/>
        <Cuadros src={require("" + this.state.src)}/>
      </div>
    );
  }
}

export default App;
