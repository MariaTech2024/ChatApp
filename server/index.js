import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute.js";
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true, 
}));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
  res.send("Server is working!")
});

app.use('/auth', authRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));