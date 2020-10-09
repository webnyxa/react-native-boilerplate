import {SAVE_USER,SAVE_USER_ID,CLEAR} from './actionTypes'

export const saveUserData = data => ({
    type: SAVE_USER,
    payload: data
  });


  export const clear = () => ({
    type: CLEAR
  });