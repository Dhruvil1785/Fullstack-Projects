import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const { form, setForm } = useState({
        email: '',
        password: ''
    });

    const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', form);
            localStorage.setItem('token', res.data.token);
            alert('Login successful!');
        } catch (err) {
            alert(err.response.data.msg);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Email" onChange={onChange}  />
                <label>Password:</label>
                <input type="password" name="password" placeholder="password" onChange={onChange}  />
                <button type="submit">Login</button>
            </form>
        </>
    )
}