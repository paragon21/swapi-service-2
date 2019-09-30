import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends Component {

  render() {
    return (
      <h1> Hello SWAPI! </h1>
    );
  }
};


const root = document.getElementById('root');

ReactDOM.render(<App/>, root);
