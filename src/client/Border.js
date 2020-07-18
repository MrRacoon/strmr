import React, { useRef } from "react";
import { brand, bounds, streamerBounds, pad, border, healthbar } from "./constants";

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
          <text
            id="bottom-border"
            x={border.thickness}
            y={border.thickness * 0.7}
            style={brand.style}
            fill={border.color}
          >
              MrRacoon
          </text>
          <rect
            id="healthbar-shadow"
            x={210 + healthbar.shadow}
            y={((border.thickness - healthbar.height) / 2) + healthbar.shadow}
            height={healthbar.height}
            width={healthbar.width}
            fill={'black'}
            rx={healthbar.rounded}
          />
          <rect
            id="healthbar-base"
            x={210}
            y={(border.thickness - healthbar.height) / 2}
            height={healthbar.height}
            width={healthbar.width}
            fill={'grey'}
            rx={healthbar.rounded}
          />
          <rect
            id="healthbar-inner"
            x={210 + healthbar.border.thick}
            y={((border.thickness - healthbar.height) / 2) + healthbar.border.thick}
            height={healthbar.height - (healthbar.border.thick * 2)}
            width={healthbar.width - (healthbar.border.thick * 2)}
            fill={healthbar.inner}
            rx={healthbar.rounded}
          />
          <rect
            id="healthbar-contents"
            x={210 + healthbar.border.thick}
            y={((border.thickness - healthbar.height) / 2) + healthbar.border.thick}
            height={healthbar.height - (healthbar.border.thick * 2)}
            width={healthbar.width / 2}
            fill={healthbar.contents.color}
            rx={healthbar.rounded}
          />
        </g>
      </svg>
    </div>
  );
};
