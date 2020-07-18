import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default ({ data }) => {
    const d3Container = useRef(null);

    const bounds = {
      width: 1920,
      height: 1080,
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
                update.enter()
                    .append('circle')
                    .attr('cx', () => Math.random() * bounds.width)
                    .attr('cy', () => Math.random() * bounds.height * -1)
                    .attr('r', () => Math.random() * 10)
                    .attr('fill', 'blue')
                  .transition()
                    .duration(10000)
                    .ease(d3.easeBounce)
                    .attr('cy', bounds.height)

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
        />
      </div>
    );
}

