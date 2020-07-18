import React, { Component } from 'react';
import * as R from 'ramda';
import './app.css';
import Border from './Comp/Border';
import Healthbar from './Comp/Healthbar';
import Brand from './Comp/Brand';
import { brand, border } from './constants';

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
        <Border>
          <Brand
            x={border.thickness}
            y={0}
            h={border.thickness}
            w={brand.width}
          />
          <Healthbar 
            x={border.thickness + brand.width + 20}
            y={0}
            w={400}
            h={border.thickness}
          />
        </Border>
      </div>
    );
  }
}
