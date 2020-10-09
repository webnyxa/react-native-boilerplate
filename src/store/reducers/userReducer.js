import {SAVE_USER,CLEAR} from '../action/actionTypes'

const initialState = {};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER:
          return action.payload;
       
        
            case CLEAR:
              return initialState;

          default:
            return state;
    }
}