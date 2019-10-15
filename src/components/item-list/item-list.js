import React, {Component} from 'react';
import './item-list.css';
import Loader from '../loader';
import PersonDetails from '../item-details';


export default class ItemList extends Component {

  state = { data: null };


  componentDidMount() {
    const {getData} = this.props;
    getData()
      .then( data => {
        this.setState({data});
    });
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  componentDidCatch() {
    // console.log(this.props.do);
  }

  renderItems = (arr) => {
    const elems = arr.map( item => {
      return (
        <li className="list-group-item" key={item.name}>
          {item.name}
        </li>
      )
    });
    return elems;
  }

  render() {
    const {data} = this.state;

    if (!data) return null;

    const elems = this.renderItems(data);

    return (
      <ul className="item-list list-group">
            {elems}
      </ul>
    );
  }
}
