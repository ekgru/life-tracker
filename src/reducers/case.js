import {  SET_CASE, COMPLETE_CASE, DELITE_CASE } from "../actions/caseActions";

const initialState = [];

export function caseReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CASE:
      return [...state, { id: action.id, name: action.payload, completed: false }];

    case COMPLETE_CASE:
      return state.map(item =>
        item.id === action.id
          ? { ...item, completed: !item.completed }
          : item
      );
      case DELITE_CASE:
          return state.filter(item=> item.id !== action.id)
    default:
      return state;
  }
}
