import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default ({ data }) => {
    const d3Container = useRef(null);

    const bounds = {
      width: 1920,
      height: 1080,
    };

    const streamerWindow = {
      width: 599,
      height: 337,
    };

    useEffect(
        () => {
            console.log('out');
            if (data && d3Container.current) {
                const svg = d3.select(d3Container.current);

                console.log('create the container');
                const update = svg
                    .append('g')
                    .selectAll('circle')
                    .data(data);


                console.log('the initial state of the elements');
                const circles = update.enter()
                    .append('circle')
                    .attr('r', () => 5 + (Math.random() * 10))
                    .attr('fill', 'red')

                function rain () {
                  const ix = Math.random() * bounds.width;
                  const iy = Math.random() * bounds.height * -1;
                  circles
                    .attr('cx', () => ix)
                    .attr('cy', () => iy)
                    .transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('cy', -1 * iy + bounds.height)
                    .on('end', rain)
                }

              rain()

              /*
                console.log('updates and transitions');
                update
                    .attr('x', (d, i) => i * 40)
                    .text((d) => d);
               */

                console.log('remove elements no longer in data');
                update.exit().remove();
            }
        },

      [data, d3Container.current]
    );

    const containerStyle = {
      position: 'absolute',

    };

    return (
      <div style={containerStyle}>
        <svg
            className="d3-component"
            width={bounds.width}
            height={bounds.height}
            ref={d3Container}
        >
            <g>
            </g>
        </svg>
      </div>
    );
}

