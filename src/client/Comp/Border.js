import React, { useRef } from "react";
import { brand, bounds, streamerBounds, pad, border, healthbar } from "../constants";

const containerStyle = {
  postition: "absolute",
  left: streamerBounds.width + pad,
  bottom: streamerBounds.height + pad
};

const Border = ({ children }) => {
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
            id="streamer-box"
            x={(bounds.width - streamerBounds.width) - border.thickness}
            y={(bounds.height - streamerBounds.height) - border.thickness}
            height={streamerBounds.height + border.thickness}
            width={streamerBounds.width + border.thickness}
            fill={border.color}
          />
          <rect
            id="top-border"
            x={0}
            y={0}
            height={border.thickness}
            width={bounds.width}
            fill={border.color}
          />
          <rect
            id="bottom-border"
            x={0}
            y={bounds.height - border.thickness}
            height={border.thickness}
            width={bounds.width}
            fill={border.color}
          />
          <rect
            id="left-border"
            x={0}
            y={0}
            height={bounds.height}
            width={border.thickness}
            fill={border.color}
          />
          <rect
            id="right-border"
            x={bounds.width - border.thickness}
            y={0}
            height={bounds.height}
            width={border.thickness}
            fill={border.color}
          />
          {children}
        </g>
      </svg>
    </div>
  );
};

export default Border;
