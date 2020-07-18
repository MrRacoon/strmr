import React, { useRef } from "react";
import { bounds, streamerBounds, pad } from "./constants";

const containerStyle = {
  postition: "absolute",
  left: streamerBounds.width + pad,
  bottom: streamerBounds.height + pad
};

export default () => {
  const d3Container = useRef();

  console.log(bounds)
  console.log(streamerBounds)
  console.log(pad)

  console.log(containerStyle)

  return (
    <div style={containerStyle}>
      <svg
        className="d3-component"
        width={bounds.width}
        height={bounds.height}
        ref={d3Container}
      >
        <g>
          <rect
            x={bounds.width - streamerBounds.width - pad}
            y={bounds.height - streamerBounds.height - pad}
            height={streamerBounds.height + pad}
            width={streamerBounds.width + pad}
            fill="blue"
          />
        </g>
      </svg>
    </div>
  );
};
