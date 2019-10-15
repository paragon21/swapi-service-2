import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/SwapiService';

import './app.css';

class App extends Component {

  state = {person: null,
           planet: null,
           starship: null
          };

  swapi = new SwapiService();


  // componentDidMount() {
  //   this.swapi.getAllPeople()
  //     .then(people => {
  //        this.setState({people});
  //        this.setState({show_people: this.state.people[0]})
  //     });
  //   this.swapi.getAllPlanets()
  //     .then(planets => {
  //       this.setState({planets});
  //       this.setState({show_planet: this.state.planets[0]});
  //     });
  // }

  // clickHandler = (e) => {
  //   if (e.target.className !== 'list-group-item') return;
  //   var data = this.state.people;
  //   var targetElem = data.filter( person => {
  //     if (person.name === e.target.textContent) {
  //       return true;
  //     }
  //   });
  //   this.setState({show_person: targetElem[0]})
  // }

  render() {

    return (
      <div className="app container">
        <Header />
        <RandomPlanet />

        <div className="content-box">

            <ItemList getData={this.swapi.getAllPeople} />
        </div>


      </div>
    );
  }
}

export default App;
