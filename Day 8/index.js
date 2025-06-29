// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`)
// })

const express = require('express');
const app = express();

app.use(express.json());

let users = [
    {id: 1, name: 'Alice' },
    {id: 2, name: 'Bob' },
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id',(req, res) => {
    const userId = parseInt(req.params.id);
    const updatedName = req.body.name;

    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = updatedName;
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({ message: `User ${userId} deleted` });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// run via postman
// GET http://localhost:3000/users
// POST http://localhost:3000/users Body: { "name": "Charlie" }
// PUT http://localhost:3000/users/2 Body: { "name": "Bob Updated" }
// DELETE http://localhost:3000/users/2