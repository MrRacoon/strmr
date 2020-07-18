import React from 'react';

const HealthBar = ({
  goal, current,
}) => {
  const percentOfGoal = current / goal;

  const styles = {
    outer: {
      height: '6vh',
      width: '30vw',
      'background-color': 'grey',
      top: '4vh',
      left: '2vw',
      position: 'absolute',
    },
    inner: {
      height: '4vh',
      width: '22vw',
      'background-color': 'red',
      top: '5vh',
      left: '3vw',
      position: 'absolute',
    }
  };
  return (
    <div>
      { /*

      <div style={styles.outer} />
      <div style={styles.inner} />

      */ }
    </div>
  );
};

export default HealthBar;
