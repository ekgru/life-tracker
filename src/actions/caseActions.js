export const SET_CASE = 'SET_CASE'
let nextCaseId = 0
export function setCase(name) {
    return {
      type: SET_CASE,
      id: nextCaseId++,
      payload: name,
    }
  }

  export const COMPLETE_CASE = 'COMPLETE_CASE'
  export function completeCase(id) {
    return {
      type: COMPLETE_CASE,
       id,
    }
  }
  
  export const DELITE_CASE = 'DELITE_CASE'
  export function deliteCase(id) {
    return {
      type: DELITE_CASE,
       id,
    }
  }