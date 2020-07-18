import React from 'react';
import * as d3 from 'd3';

const Anims = () => {

  const px = (str) => `${str}px`;

  const container = {
    style: {
      position: 'absolute',
    },
  };

  const bounds = {
    height: 100,
    width: 100,
  };

  const outer = {
    height: 100,
    width: 100,
    x: 0,
    y: 0,
  };

  const pad = 5;

  const inner = {
    height: outer.height - pad * 2,
    width: outer.width - pad * 2,
    x: outer.x + pad,
    y: outer.y + pad,
  };

  return (
    <div style={container.style}>
      <svg height={bounds.height} width={bounds.width} >
        <g>
          <rect x={outer.x} y={outer.y} height={outer.height} width={outer.width} fill={'grey'}/>
          <rect x={inner.x} y={inner.y} height={inner.height} width={inner.width} fill={'red'}/>
        </g>
      </svg>
    </div>
  );
};

export default Anims;
