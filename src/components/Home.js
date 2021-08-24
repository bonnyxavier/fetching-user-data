import React from 'react'
import {Link} from 'react-router-dom'


function Home() {
    return (
        <div>
            <h1>HOME PAGE</h1>
            <Link to="/users">Go to User List</Link>
        </div>
    )
}

export default Home
