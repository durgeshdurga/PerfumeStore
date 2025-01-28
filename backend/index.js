import express from "express";
import ProductController from "./controllers/product.controllers.js";
import dbConnection from "./db/config.js";
import dotenv from "dotenv"
import cors from "cors";
// import pushDataToDb from "./pushDataToDb.js";
const app = express();
dotenv.config();


app.use(express.json());
app.use(cors());
app.get("/", ProductController);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server started");
  dbConnection();
  // pushDataToDb();
});
