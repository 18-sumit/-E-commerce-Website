import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import uploadOnCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.routes.js";


//App config

const app = express();

const port = process.env.port || 4000;
connectDB();
uploadOnCloudinary();

// middleware

app.use(express.json());
app.use(cors())

// api endpoints:
app.use('/api/user',userRouter)

app.get('/', (req, res) => {
    res.send("API WORKING")
});

// start server
app.listen(port, () => { 
    console.log("Server is running on port:",port)
})