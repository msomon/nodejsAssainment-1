
const express = require('express')
const port = process.env.PORT || 5000 ;
const app =express()

app.use(express.json()); 
// app.use(express.static("public"))


let data = [ 
  {
    "id": "1" ,
    "gender": "male",
    "name":"rohaman",
    "contact":"14000 ",
    "address":"dhaka" ,
    "img":"https://i.ibb.co/tcLCQRK/tv.webp" 
  },
  {
    "id": "2" ,
    "gender": "male",
    "name":"patlu",
    "contact":"14000 ",
    "address":"dhaka" ,
    "img":"https://i.ibb.co/KxkcqgH/ceilling-fan.webp"
  
  },
  {
    "id": "3" ,
    "gender": "male",
    "name":"motu",
    "contact":"14000 ",
    "address":"dhaka" ,
    "img":"https://i.ibb.co/KxkcqgH/ceilling-fan.webp"
  
  }
]

// console.log(data);



app.get('/',async(req,res)=>{
  
  res.send("assainment")
  
  })
app.get('/get',async(req,res)=>{
  
  res.sendFile(__dirname + "/public/data.json")
  
  })

  app.get('/get/:id',async(req,res)=>{
    const {id}= req.params 
    // const filter = { _id : id }
    tools = data.filter(tool=> tool.id === id)
    res.send (tools)
    
  })

  app.post('/add',async(req,res)=>{
    const order = req.body
    
    // console.log(order);
    res.send(order)
  })

  app.put("/put/:id",(req,res)=>{
    const {id} = req.params
   
const newData = data.find(tool=>tool.id === id)

newData.id = req.body?.id
console.log(newData.id); 
newData.name= req.body?.name
newData.gender = req.body?.gender
newData.contact = req.body?.contact
newData.address = req.body?.address
newData.img = req.body?.img
res.send(newData)
  })


  app.patch("/patch/:id",(req,res)=>{
    const {id} = req.params 
const newData = data.find(tool=>tool.id === id)
newData.id = req.body?.id 
newData.name= req.body?.name
newData.gender = req.body?.gender
newData.contact = req.body?.contact
newData.address = req.body?.address
newData.img = req.body?.img
res.send(newData)
  })

  app.delete('/delete/:id',async(req,res)=>{
    const {id}= req.params 
    // const filter = { _id : id }
    tools = data.filter(tool=> tool.id === !id)
    res.send (tools)
    
  })

// console.log(data);

app.all("*",(req,res)=>{
  res.send("no page found")
})
app.listen(port,()=>{
  console.log('listening to port',port);
})