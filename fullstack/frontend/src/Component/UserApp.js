import { useState, useEffect } from "react";
import axios from "axios";

function UserApp() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ name: "", email: "" });

    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:5000/api/users');
        setUsers(res.data);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form._id) {
            await axios.put(`http://localhost:5000/api/users/${form._id}`, form);
        } else {
            await axios.post('http://localhost:5000/api/users', form);
        }

        setForm({ name: "", email: "" });
        fetchUsers();
    };

    const handleEdit = (user) => setForm(user);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        fetchUsers();
    };

    return (
        <div className=" p-4 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <form onSubmit={handleSubmit} className="mb-4 space-y-2 ">
                <input type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border px-2 py-1"
                    required
                />

                <input type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border px-2 py-1"
                    required
                />
                <button className="bg-blue-500 text-white px-4 py-1 rounded">{form._id ? 'update' : 'Add'}</button>

                <ul>
                    {users.map(user => (
                        <li key={user._id} className=" flex justify-between items-center border-b py-2">
                            <span>{user.name}{user.email}</span>
                            <div className=" space-x-2">
                                <button onClick={() => handleEdit(user)} className=" bg-yellow-400 px-2 py-1 text-white rounded">Edit</button>
                                <button onClick={() => handleDelete(user.id)} className=" bg-red-500 px-2 py-1 text-white rounded">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default UserApp;