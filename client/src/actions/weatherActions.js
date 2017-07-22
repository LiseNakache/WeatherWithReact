import axios from "axios";

export function fetchWeather(string) {
  return function (dispatch) {
    dispatch({type: "FETCH_WEATHER"});
    axios
      .get("http://api.apixu.com/v1/current.json?key=5f1979d6812b411491d164417171806&q=" + string)
      .then((response) => {
        var stracture = {
          id: Math.floor(100000000 + Math.random() * 900000000),
          name: response.data.location.name,
          icon: response.data.current.condition.icon,
          feelslike_c: response.data.current.feelslike_c,
          text: response.data.current.condition.text,
          comments: []
        };
        dispatch({type: "FETCH_WEATHER_FULFILLED", payload: stracture})
      })
      .catch((err) => {
        dispatch({type: "FETCH_WEATHER_REJECTED", payload: err})
      })
  }
} 
export function addWeatherComment(id, text) {
  return {
    type: 'ADD_WEATHER_COMMENT',
    payload: {
      id,
      text
    }
  }
}

export function deleteWeatherComment(id, text) {
  return {
    type: 'DELETE_WEATHER_COMMENT',
    payload: {
      id,
      text
    }
  }
}

export function deleteWeather(id) {
  return {type: 'DELETE_WEATHER', payload: id}
}