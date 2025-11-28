import express from "express";
import dotenv from "dotenv";
import hydrate from "./routes/hydrate.route.js";
import connectDB from "./config/db.js";
import routeNotFound from "./middleware/routeNotFound.js";

dotenv.config();

const PORT = process.env.PORT || 6001;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API working...");
});

app.use("/api/hydrate", hydrate);
app.use(routeNotFound);

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`App running at address: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

start();
