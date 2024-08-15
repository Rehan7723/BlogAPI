const express= require('express')
const connectDB=require('./db');
const Category=require('./models/Category');
const app= express()
const categoryRoute= require('./Routes/categories')


const port=4000
connectDB()

app.use(express.json);

app.use('/categories', categoryRoute)





//used to read the body of the request

// app.post('/categories', async(req,res) => {
//     try{

    
//     const cat=await Category.create(req.body)
//     res.status(201).json({
//         success: true,
//         category: cat
//     })
//     }catch(error)
//     {
//         res.status(400,json({
//             success: false,
//             error
//         }))
//     }
// })

// app.get('/categories', async(req,res) =>{
//     try{
//     const categories=await Category.find()
//     res.status(200)
//     console.log(categories.length)
//     }catch(error)
//     {
//         res.status(400);
//     }

// })

