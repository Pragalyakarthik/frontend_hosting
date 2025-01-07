import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault(); // To avoid rendering data to store
        axios.post("https://hosting-backend-1-b3ho.onrender.com/api/user/create", { name, email, address })
            .then(result => {
                console.log(result.data)
                navigate('/');
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div className="create-page">
            <form onSubmit={submit}>
                <h1>User Details</h1>
                <label>Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} /><br />
                <label>Email</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Address</label>
                <input type="text" onChange={(e) => setAddress(e.target.value)} /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateUser;
