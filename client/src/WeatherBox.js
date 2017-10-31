import React from 'react';
import CommentsListBox from './CommentsListBox';

const WeatherListBox = (props) => {
  const dataItem = props.item;
    return (
       <div className="equalHeightBox">
        <div className="media">
          <span className="glyphicon glyphicon-trash pull-right" 
          onClick={()=>props.removeWeatherBox(props.item)} ></span>
          <div className="media-left">
            <img src={dataItem.icon} alt={dataItem.name} className="media-object" style={{ width: 60}}/></div>
          <div className="media-body">
            <h4 className="media-heading">{dataItem.name}</h4>
            <p>{dataItem.text}- {dataItem.feelslike_c} &nbsp;| C</p>
          </div>
        </div>
        <CommentsListBox comments={dataItem.comments}/>
        <hr/>
      </div>
    )
};

export default WeatherListBox;