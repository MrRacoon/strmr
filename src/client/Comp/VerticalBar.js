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
    x: x + pad,
    y: y + pad,
    height: h - (pad + pad),
    width: w - (pad + pad),
    fill: 'grey',
    rx,
  };

  const shadowBar = {
    ...mainBar,
    key: 'vertical-bar-shadow',
    x: mainBar.x + shadow,
    y: mainBar.y + shadow,
    fill: 'black',
  };

  const innerPad = mainBar.width * 0.3;

  const innerBar = {
    key: 'vertical-bar-inner',
    x: mainBar.x + innerPad,
    y: mainBar.y + innerPad,
    height: mainBar.height - (2 * innerPad),
    width: mainBar.width - (2 * innerPad),
    fill: inner,
    rx,
  };

  const contentsHt = (innerBar.height * pct);

  const contentsBar = {
    ...innerBar,
    key: 'vertical-bar-contents',
    y: innerBar.y + (innerBar.height - contentsHt),
    height: contentsHt,
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
