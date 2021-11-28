const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello re from my first special node yo yo');
});

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888' },
    { id: 1, name: 'Ahabana', email: 'Ahabana@gmail.com', phone: '01788888' },
    { id: 2, name: 'Bhabana', email: 'Bhabana@gmail.com', phone: '01788888' },
    { id: 3, name: 'Khabana', email: 'Khabana@gmail.com', phone: '01788888' },
    { id: 4, name: 'Lhabana', email: 'Lhabana@gmail.com', phone: '01788888' },
    { id: 5, name: 'Thabana', email: 'Thabana@gmail.com', phone: '01788888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const serachResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(serachResult);
    }
    else {
        res.send(users)
    }
    res.send(users)
});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
})