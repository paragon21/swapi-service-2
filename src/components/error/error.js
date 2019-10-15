import React, {Component} from 'react';
import logo from './death-star.svg';
import './error.css';

export default class Error extends Component {
  render() {
    return (
      <>
        <img src={logo} alt="error" />
        <div>Ошибка подключения!</div>
      </>
    );
  }
}
