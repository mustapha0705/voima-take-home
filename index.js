import express from "express";
import dotenv from "dotenv";
import hydrate from "./routes/hydrate.route.js";
import routeNotFound from "./routes/middleware/routeNotFound.js";

dotenv.config();

const PORT = process.env.PORT || 6001;

const app = express();

app.get("/", (req, res) => {
  res.send("API working...");
});

app.use("/api/hydrate", hydrate);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`App running at address: http://localhost:${PORT}`);
});
