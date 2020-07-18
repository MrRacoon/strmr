export const pad = 25;

export const ORIENTATION = {
  HORIZ: 'h',
  VERT: 'v',
}


export const bounds = {
  height: 1080,
  width: 1920,
};

export const border = {
  color: 'orange',
  thickness: bounds.height / 20,
};

export const brand = {
  width: 250,
  height: border.thickness,
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

