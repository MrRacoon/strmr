import React, { Component } from 'react';
import * as R from 'ramda';
import './app.css';
import ReactImage from './react.png';
import HealthBar from './Healthbar';
import Anims from './Anims';
import D3 from './D3';


export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    const data = R.range(0, 10);
    return (
      <div>
        <D3 data={data}/>
      </div>
    );
  }
}
