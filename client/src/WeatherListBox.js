import React from 'react';
import WeatherBox from './WeatherBox';

//WeatherListBox just renders : so function and no need for class
const WeatherListBox = (props) => {
  
const boxes = props.cards.map((item, index) => <WeatherBox key={index} item={item} delete={props.delete} index={index} />);


  return (
    <div>
      {boxes} 
    </div>
  );
};

export default WeatherListBox;

