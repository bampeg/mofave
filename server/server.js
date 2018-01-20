let dataBase=[],
    id=1

const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      port = 3001
    
app.use(bodyParser.json())
app.use((req, res, next) => {
//       console.log(req.method, req.url)
//       next();
})

app.listen(port, ()=>console.log(`Let it do on port ${port}`))

app.post('/api/user', (req, res)=>{
      const {name, rank}=req.body
      dataBase.push({name, rank, id})
      id++
      console.log(req.body)
      res.status(200).send(req.body)

})