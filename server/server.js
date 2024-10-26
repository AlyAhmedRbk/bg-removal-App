import "dotenv/config";
import express from "express";
import cors from "cors";
import connentDb from "./Configs/mongoDb.js";

// App Config
const PORT = process.env.PORT  || 4000;
const app = express();

// API  Route
app.get("/",(req, res) => {
    res.send("Api is Working")
})

// Initialize Middlewares
app.use(express.json());
app.use(cors());
await connentDb();

app.listen(PORT,()=> {
    console.log(`App Listening on PORT ${PORT}`)
})