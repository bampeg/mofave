let dataBase=[]

const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3001
    
app.use(bodyParser.json())

app.listen(port, ()=>console.log(`Let it do on port ${port}`))

app.post('/api/user', (req, res)=>{
      const {}
})