import React, { Component } from 'react';
import * as R from 'ramda';
import './app.css';
import Border from './Comp/Border';
import Brand from './Comp/Brand';
import Bar from './Comp/Bar';
import { brand, border, bounds, streamerBounds, ORIENTATION } from './constants';

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
            x={10}
            y={0}
            h={border.thickness}
            w={brand.width}
          />
          <Bar
            orientation={ORIENTATION.HORIZ}
            x={10 + brand.width + 20}
            y={0}
            w={400}
            h={border.thickness}
            contents="red"
            pct={0.25}
          />
          <Bar
            orientation={ORIENTATION.VERT}
            x={0}
            y={border.thickness}
            w={border.thickness}
            h={bounds.height - (border.thickness * 2)}
            contents="blue"
            pct={0.7}
          />
          <Bar
            orientation={ORIENTATION.VERT}
            x={bounds.width - border.thickness}
            y={border.thickness}
            w={border.thickness}
            h={(bounds.height - (border.thickness * 2)) - streamerBounds.height}
            contents="yellowgreen"
            pct={0.1}
          />
        </Border>
      </div>
    );
  }
}
