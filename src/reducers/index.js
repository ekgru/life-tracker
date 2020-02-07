import { combineReducers } from 'redux'
import { goalReducer } from './goal'
import { caseReducer } from './case'

export const rootReducer = combineReducers({
  goal: goalReducer,
  case: caseReducer,
})