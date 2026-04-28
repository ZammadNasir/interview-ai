import "dotenv/config";

import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import {
  resume,
  selfDescription,
  jobDescription,
} from "./src/services/temp.js";

connectDB();

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
