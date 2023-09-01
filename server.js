const express = require('express')
const app = express()
const port = 3000

const users = [

    {
        name:"Jeff",
        age:30,
        role: "admin"
    }
]

app.use(express.json())

app.get('/', (req, res)=>{

    res.json("I am working")
})

app.get('/users', (req, res)=>{

    res.json("I am working")
})

app.get('/users/:id', authenticate, (req, res)=>{

    res.json("I am working")
})

app.post('/user/add', auth, (req, res)=>{

    users.push(req.body)
    res.json(users)
})

function auth(req, res, next){

    if(req.body.role== "admin"){
        next()
    } 
    else{
        res.status(403).json("You are not authorized to view this page.")
    }
}

function authenticate(req, res, next){

    if(req.params.id==1){
        next()
    } 
    else{

        res.status(403);
        res.json("You are not authorized to view this page.")

    }
}

app.listen(port, ()=>{
    console.log("Server is running")
})