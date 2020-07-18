import React, { useEffect } from 'react';
import * as d3 from 'd3';

const VerticalBar = ({ 
  x, y, w, h,
  pct = 1,
  rx = 7,
  shadow = 3,
  inner = 'black',
  contents = 'red',
}) => {
  const pad = w * 0.2;

  const mainBar = {
    key: 'vertical-bar-main',
    x: pad,
    y: y,
    height: h,
    width: w - (pad + pad),
    fill: 'grey',
    rx,
  };

  const shadowBar = {
    key: 'vertical-bar-shadow',
    x: mainBar.x + shadow,
    y: mainBar.y + shadow,
    height: mainBar.height,
    width: mainBar.width,
    fill: 'black',
    rx,
  };

  const innerPad = mainBar.width * 0.3;

  const innerBar = {
    key: 'vertical-bar-inner',
    x: pad + innerPad,
    y: y + innerPad,
    height: h - (2 * innerPad),
    width: mainBar.width - (2 * innerPad),
    fill: inner,
    rx,
  };

  const contentsHt = (innerBar.height * pct);

  const contentsBar = {
    key: 'vertical-bar-contents',
    x: pad + innerPad,
    y: innerBar.y + (innerBar.height - contentsHt),
    height: contentsHt,
    width: innerBar.width,
    fill: contents,
    rx,
  };

  return (
    <g>
      <rect {...shadowBar} />,
      <rect {...mainBar} />,
      <rect {...innerBar} />,
      <rect {...contentsBar} />,
    </g>
  );
};

export default VerticalBar;
