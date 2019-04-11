import /* we need our action types here*/{ FAIL, FETCH, SUCCESS } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH: 
      return {
        ...state,
        fetching: true, 
        error: ''   
      }
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        error: '',
        characters: action.payload
      }
    case FAIL:
    default:
      return state;
  }
};
