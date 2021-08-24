import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectedUser } from '../redux/Users/user-actions'

function SingleUserDetail() {

const {userId} = useParams()
const user = useSelector((state)=>state.selectedUserReducer)
const {id,name,username,email} = user
const dispatch = useDispatch()
    
const fetchSingleUserDetail = async (id) => {
   
    const response = await axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .catch((err)=>{
        console.log("Error: ", err)
    })
    dispatch(selectedUser(response.data))
}

useEffect(()=>{
    if(userId && userId !== "" ) fetchSingleUserDetail();
},[userId])
    return (
        <div>
            <div>
                    
                    <ul >
                        <li>Name: {name}</li>
                        <li>Username: {username}</li>
                        <li>Email: {email}</li>
                    </ul>
                    </div>
        </div>
    )
}

export default SingleUserDetail
