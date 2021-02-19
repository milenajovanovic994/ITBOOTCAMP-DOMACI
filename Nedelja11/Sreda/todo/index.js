import express from 'express'

const app = express()
app.use(express.json())

let todos = [
    {
        id: 1,
        text: 'Do the homework!',
        done: true
    },
    {
        id: 2,
        text: 'Wash the dishes!',
        done: true
    },
    {
        id: 3,
        text: 'Do your laundry!',
        done: true
    },
    {
        id: 4,
        text: 'Take out the trash!',
        done: true
    },
    {
        id: 5,
        text: 'Cook some diner!',
        done: true
    }
]

app.get('/todos', (_,res) => {
    res.json(todos)
})

app.get('/todos/:id', (req,res) => {
    const id = req.params.id
    const todo = todos.find(todo => todo.id == id)
    if(todo){
        res.json(todo)
    }
    else{
        res.status(404).end()
    }
})

app.delete('/todos/:id', (req,res) => {
    const id = req.params.id
    todos = todos.filter(todo => todo.id != id)
    res.status(204).end()
})

app.post('/todos', (req,res) => {
    const id = todos.length > 0 ?
    Math.max(...todos.map(todo => todo.id)) + 1
    : 1

    const todo = req.body
    todo.id = id

    todos = todos.concat(todo)

    res.json(todo)
})

app.patch('/todos/:id', (req,res) => {
    const id = req.params.id
    const todo = req.body

    todos = todos.splice(id, 1, {...todos[id], ...todo})

    res.json(todos)
})

const PORT = 3005

app.listen(PORT, () => {
    console.log(`Server strted at http://localhost:${PORT}`)
})