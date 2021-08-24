import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

function UserComponent() {


    const users = useSelector((state)=>state.UserReducer.users)
    const userDisplay = users.map((user)=>{
        const {id,name,username,email} = user

        return(
            <div key={id}>
                <Link to={`/userinfo/${id}`}>
                    <div>
                    <hr></hr>
                    <ul >
                        <li>Name: {name}</li>
                        <li>Username: {username}</li>
                        <li>Email: {email}</li>
                    </ul>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h5>{userDisplay}</h5>
        </div>
    )
}

export default UserComponent
