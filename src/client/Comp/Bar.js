import React from 'react';
import VerticalBar from './VerticalBar';
import HorizontalBar from './HorizontalBar';
import { ORIENTATION } from '../constants';

const Bar = ({ orientation = ORIENTATION.HORIZ, ...rest }) => {
  if (orientation === ORIENTATION.HORIZ) {
    return <HorizontalBar {...rest} />;
  }
  return <VerticalBar {...rest} />;
}

export default Bar;
