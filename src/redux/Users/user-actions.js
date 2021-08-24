import userTypes from "./user-constants";


export const addUser = (users)=>(
    {
        type: userTypes.ADD_USERS,
        payload: users
    }
)

export const selectedUser = (user) =>{
    return{
        type: userTypes.SELECTED_USER,
        payload: user
    }
}