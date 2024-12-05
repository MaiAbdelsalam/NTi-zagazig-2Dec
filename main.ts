import express from 'express';
import categoriesService from './category/categories.service';
import dotenv from 'dotenv'
import dbConnection from './config/database';
import categoriesRouter from './category/categories.routes';
import subcategoriesRouter from './subcategries/subcategories.route';
import mountRoutes from './subcategries';
const app:express.Application=express();
app.use(express.json({limit:'10kb'}));
dotenv.config();
dbConnection();
// app.use("/api/v1/categories",categoriesRouter)

// app.use('/api/v1/subcategories',subcategoriesRouter);
mountRoutes(app);
app.listen(3000)
// app.listen(process.env.PORT,()=>{
//     console.log(`port is ${process.env.PORT}`);
// })
























// npm i -D typescript @types/express@4.17.21 @types/node ts-node nodemon
// import express from 'express';
// import dbconnection from "src/config/database";
// const app : express.Application=express();
// app.use(express.json({limit:'10kb'}));
// app.get('/',function(req:express.Request,res:express.Response){
//     res.json({data:'name'});
//     console.log("hello");
// })
// app.listen(3000,()=>{
//     console.log('server started on port 3000');
// });

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000,()=>{
//     console.log('server started on port 3000');}
// )

// app.use('./api/v1/categories',);
// // دي االلي بعمل فيها كل حاجه 
// // app:   /  جواها بنكتب في اول حاجه اللي عاوزينها تفتح اللي هي معناها اول ما يتفتح المشروع يشتغل
// app.get('/',(req:express.Request,res:express.Response)=>{
//     res.json({data:"mai"});
//     console.log("true");
// });
// app.get('/',categoriesService.getAll);
// app.listen(3000,()=>{console.log("you are in port 300")});


