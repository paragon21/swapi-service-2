import React, {Component} from 'react';
import Loader from '../loader';
import './random-planet.css';
import SwapiService from '../../services/SwapiService'
import Error from '../error';

class RandomPlanet extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      planet: {},
      loading: true,
    };
    this.updatePlanet();
  }

  componentDidMount() {
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  swapiService = new SwapiService();

  onPlanetLoaded = (planet) => {
    this.setState({planet});
    this.setState({loading: false});
  };

  onError = (err) => {
    this.setState( state => {
      return {
        error: true,
        loading: false,
      }
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };


  render() {
    const { planet: {id, name, population,
            rotationPeriod, diameter} } = this.state;

    if (this.state.loading) {
      return (
        <div className="random-planet">
          <Loader />
        </div>
      )
    }

    if (this.state.error) {
      return (
        <div className="random-planet">
          <Error />
        </div>
      )
    }

    return (
      <div className="random-planet">
        <img className="random-planet__img"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet view from space" />
        <div className="random-planet__text">
          <div className="random-planet__header"> {name} </div>
          <hr />
          <div className="random-planet__population"> Population {population} </div>
          <hr />
          <div className="random-planet__rotation"> Rotation Period {rotationPeriod} </div>
          <hr />
          <div className="random-planet__diameter"> Diameter {diameter} km </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
