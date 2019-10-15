import React, {Component} from 'react';
import Loader from '../loader';
import './item-details.css';


export default class PersonDetails extends Component {
  render() {

    if (this.props.person === null) return null;

    const { id, name, sex, birth_year, eye_color } = this.props.data;

    return (
      <div className="person-details">
        <img src={`https://starwars-visualguide.com/assets/img/${this.props.subject}/${id}.jpg`} />
        <div className="person-text">
          <div className="person-name">Name: {name}</div>
          <div>Birth Day: {birth_year}</div>
          <div>Gender: {sex}</div>
          <div>Eye color: {eye_color}</div>
        </div>
      </div>
    );
  }
}
