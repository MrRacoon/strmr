export const pad = 25;

export const bounds = {
  height: 1080,
  width: 1920,
};

export const brand = {
  style: {
    fill: 'white',
    stroke: 'black',
    strokeWidth: 0.5,
    fontSize: '2em',
    fontFamily: 'helvetica',
  },
};

export const border = {
  color: 'maroon',
  thickness: bounds.height / 27,
};

export const streamerBounds = {
  width: 599,
  height: 337,
};

export const healthbar = {
  width: 700,
  height: border.thickness * 0.5,
  rounded: 10,
  shadow: 3,
  inner: 'light-grey',
  contents: {
    color: 'red',
  },
  border: {
    color: 'grey',
    thick: 7,
  },
};

