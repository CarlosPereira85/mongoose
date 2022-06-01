import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postsRoutes from "./routes/postsRoutes.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/posts", postsRoutes)


mongoose
.connect(process.env.CONNECTION_URL)
.then(() => 
app.listen(PORT, () => 
    console.log(`Server started on PORT ` , PORT),
),
)

.catch (err => {
    console.log(err);
});



