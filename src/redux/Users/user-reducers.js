import userTypes from "./user-constants";

const INITIAL_STATE = {
    users: []
}

export const UserReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){

        case userTypes.ADD_USERS:
            return{...state, users:action.payload}
        default: 
            return state;
    }
}

export const selectedUserReducer = (state={}, action)=>{
    switch(action.type){
        case userTypes.SELECTED_USER:
            return{...{state}, ...action.payload}
    

        default:
            return state;
    } 
}  
