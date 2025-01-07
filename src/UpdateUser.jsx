import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateUser.css';

function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        axios.put(`https://hosting-backend-1-b3ho.onrender.com/api/user/update/${id}`, { name, email, address })
            .then(result => {
                navigate('/');
            })
            .catch(err => { console.log(err) });
    }

    return (
        <div className="update-page">
            <div>
                <h1>Update User</h1>
                <form onSubmit={update}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label>Address</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
