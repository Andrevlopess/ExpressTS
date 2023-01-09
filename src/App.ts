console.log('');

// * init express

import express  from "express";

const app  = express()

app.get('/', (req, res) => {
    return res.send('hello world')
})

app.listen(3000, () => {
    console.log("its working");
    
})


// * express routes 
app.use(express.json())


app.post("/api/products", (req, res) => {

    console.log(req.body);

    return res.send("Added product")
    
})