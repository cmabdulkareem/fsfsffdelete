import express from 'express'
import indexRoutes from './routes/indexRoutes.js';
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', indexRoutes)

app.listen(3000, ()=>{
    console.log("Backend server running on port 3000");
})