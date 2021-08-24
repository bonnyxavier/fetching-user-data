import axios from 'axios'
import React, {useEffect}  from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/Users/user-actions'
import UserComponent from './UserComponent'


function User() {


    const dispatch = useDispatch()


    const fetchUsers = async ()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        .catch((err)=>{
            console.log("Error",err)
        })
        console.log(response.data)
        dispatch(addUser(response.data))
    
    }

    useEffect(()=>{
        fetchUsers();
    },[])

    return (
        <div>
          

            <UserComponent></UserComponent>
    


        </div>
    )
}

export default User
