import {
  SET_GOAL,
  ARCHIVE_GOAL,
  DELITE_GOAL,
  COUNT_GOAL
} from "../actions/goalActions";

const initialState = [];

export function goalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GOAL:
      return [
        ...state,
        {
          id: action.id,
          name: action.payload,
          inArchive: false,
          date: new Date(),
          count: 0
        }
      ];

    case ARCHIVE_GOAL:
      return state.map(item =>
        item.id === action.id ? { ...item, inArchive: !item.inArchive } : item
      );
    case DELITE_GOAL:
      return state.filter(item => item.id !== action.id);

    case COUNT_GOAL:
      return state.map(item =>
        item.id === action.id ? { ...item, count: item.count + 1 } : item
      );
    default:
      return state;
  }
}
