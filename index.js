const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>My first API!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    res.json(person)
})

app.get('/info', (req, res) => {
    const today = new Date()
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</p>`)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)

    res.status(204).end()

})

app.post('/api/persons', (req, res) => {
    const newid = Math.floor(Math.random() * 100)
    
    const person = {
        id: newid,
        name: "bob",
        number: "678234"
    }

    persons = persons.concat(person)

    res.json(persons)
    
})

const PORT = 3007
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  
})