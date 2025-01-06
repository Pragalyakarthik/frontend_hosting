import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const User=()=>{
    const [user,setUser]=useState([]);
    useEffect(()=>{
        axios.get('https://hosting-backend-1-b3ho.onrender.com/api/user/fetch')
        .then(result=>{
            setUser(result.data.users)
        })
        .catch(err=>{console.log(err)})
    },[]);

    const del=(id)=>{
        axios.delete(`https://hosting-backend-1-b3ho.onrender.com/api/user/delete/${id}`)
        .then(result=>{
            console.log("User deleted");
        })
    }
    return(
        <div>
            <h1>User</h1>
            <Link to="/create">Create Users</Link>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                {
                    user.map((users)=>(
                        <tr>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.address}</td>
                            <td>
                                <Link to={`/update/${users._id}`}>Update</Link>
                                <button onClick={(e)=>del(users._id)}>delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default User;