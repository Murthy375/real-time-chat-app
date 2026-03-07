import app from "./app.js";

// env realated
import "dotenv/config";

// mongodb related
import { connectToMongoDB } from "./connections/mongodb.connection.js";

connectToMongoDB(process.env.MONGODB_URL);

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
  console.log(`\nhttp://localhost:${PORT}`);
});
