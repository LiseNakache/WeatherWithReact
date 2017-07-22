export default function reducer(state={
    boxes: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_WEATHER": {
        return {...state, fetching: true}
      }
      case "FETCH_WEATHER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_WEATHER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          boxes: [...state.boxes, action.payload]
        }
      }
      case "ADD_WEATHER_COMMENT": {
        const { id, text } = action.payload
        const newweather = [...state.boxes]
        const weatherToUpdate = newweather.findIndex(boxes => boxes.id === id)
        newweather[weatherToUpdate].comments.push(text);

        return {
          ...state,
          boxes: newweather,
        }
      }
      case "DELETE_WEATHER_COMMENT": {
        const { id, text } = action.payload
        const newweather = [...state.boxes]
        const weatherToUpdate = newweather.findIndex(boxes => boxes.id === id)
        newweather[weatherToUpdate].comments.push(text);

        return {
          ...state,
          boxes: newweather,
        }
      }
      
      case "DELETE_WEATHER": {
        return {
          ...state,
          boxes: state.boxes.filter(boxes => boxes.id !== action.payload),
        }
      }
    }

    return state
}