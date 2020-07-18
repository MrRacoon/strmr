import React from 'react'
import { border, brand, bounds } from '../constants';

const Brand = ({
  x, y, h, w,
  textPad = 30,
  background = 'grey',
  shadow = 'black',
  border = 5,
  color = 'white',
  stroke = 'black',
  strokeWidth = 0.7,
}) => {
  return (
    <g>
      <rect
        id="brand-backing"
        x={x}
        y={y}
        rx={20}
        height={h}
        width={w}
        fill={shadow}
      />
      <rect
        id="brand-backing"
        x={x}
        y={y}
        rx={20}
        height={h - (border * 1)}
        width={w - (border * 1)}
        fill={background}
      />
      <text
        id="brand"
        x={x + textPad}
        y={h * 0.75}
        style={{
          fill: color,
          stroke,
          strokeWidth,
          fontSize: h * 0.75,
          fontFamily: '"Lucida Console", Monaco, monospace',
        }}
        fill={border.color}
      >MrRacoon</text>
    </g>
  );
}

export default Brand;
