import React from 'react'; 

const HorizontalBar = ({ x, y, w, h,
  pct = 0.8,
  rx = 10,
  shadow = 3,
  inner = 'black',
  contents = 'red',
}) => {
  const pad = h * 0.2;
  const barHt = h - (2 * pad);

  const innerPad = barHt * 0.3;
  const innerBarHt = barHt - (2 * innerPad);
  return (
    <g>
      <rect
        key="healthbar-shadow"
        x={x + shadow}
        y={pad + shadow}
        height={barHt}
        width={w}
        fill={'black'}
        rx={rx}
      />,
      <rect
        key="healthbar-base"
        x={x}
        y={pad}
        height={barHt}
        width={w}
        fill={'grey'}
        rx={rx}
      />,
      <rect
        key="healthbar-inner"
        x={x + innerPad}
        y={pad + innerPad}
        height={innerBarHt}
        width={w - (pad + innerPad)}
        fill={inner}
        rx={rx}
      />,
      <rect
        key="healthbar-contents"
        x={x + innerPad}
        y={pad + innerPad}
        height={innerBarHt}
        width={(w - (pad + innerPad)) * pct}
        fill={contents}
        rx={rx}
      />
    </g>
  );
};

export default HorizontalBar;
