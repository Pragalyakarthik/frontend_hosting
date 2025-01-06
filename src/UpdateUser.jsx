import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {useState} from 'react'
function UpdateUser()
{
    const{id}= useParams();
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[address,setAddress]=useState();
    const navigate=useNavigate();

const update=(e)=>{
    e.preventDefault();
    axios.put(`https://hosting-backend-1-b3ho.onrender.com/api/user/update/${id}`,{name, email,address})
    .then(result=>{
        navigate('/');
    })
    .catch(err=>{console.log(err)})
}
    return (
        <div>
            <form onSubmit={update}>
                <h1>Update User</h1>
                <label >Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Email</label>
                <input type="text"value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <label>Address</label>
                <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
      )
}

export default UpdateUser;
