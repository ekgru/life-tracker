export const SET_GOAL = "SET_GOAL";
let nextGoalId = 0;
export function setGoal(name) {
  return {
    type: SET_GOAL,
    id: nextGoalId++,
    payload: name
  };
}

export const ARCHIVE_GOAL = "ARCHIVE_GOAL";
export function archiveGoal(id) {
  return {
    type: ARCHIVE_GOAL,
    id
  };
}

export const DELITE_GOAL = "DELITE_GOAL";
export function deliteGoal(id) {
  return {
    type: DELITE_GOAL,
    id
  };
}
export const COUNT_GOAL = "COUNT_GOAL";
export function countGoal(id) {
  return {
    type: COUNT_GOAL,
    id
  };
}
