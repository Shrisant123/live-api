const express=require('express');
const app=express();
port=process.env.PORT || 3000;

app.get('/', (req,res)=>{
	res.send("This is first page");
})

app.get('/home', (req,res)=>{
	res.send("This is home page");
})

app.get('/stopwatch', (req,res)=>{
	res.sendFile('index.html', {root:__dirname});
})

app.get('/Eproducts', (req,res)=>{
	res.sendFile('Allproducts.json', {root:__dirname});
})

app.get('/ItemProducts', (req,res)=>{
	res.sendFile('items.json', {root:__dirname});
})

app.listen(port, ()=>{
	console.log(`The port is listening at ${port}`);
})



