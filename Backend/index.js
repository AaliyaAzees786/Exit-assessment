const express=require('express');
const cors=require('cors');
const BlogData=require('./connection')
const app= new express();
require('./connection');
const PORT=4000;
const BlogModel=require('./model');
app.use(express.json())
app.use(cors());

//POST
app.post('/addblog',async(req,res)=>{
    try {
        var item = req.body;
        const datasave = new BlogModel(item);
        const saveddata = await datasave.save();
        res.send('Post successful')
    } catch (error) {
        console.log(error)
    }
})

//GET
app.get('/blogs', async(req,res)=>{
    try {
        const data = await BlogModel.find();
        res.send(data);
    } catch (error) {
        res.send('Data not found');
    }
})



app.listen(PORT,()=>{
    console.log('Server is running on PORT 4000')
})