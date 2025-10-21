// server/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import donorRoutes from "./route/donorRoute.js"; 

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MOUNT donor routes under /api/donor
app.use("/api/donor", donorRoutes);

app.get("/", (req, res) => {
  res.send(" Backend is running on port 5000!");
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
