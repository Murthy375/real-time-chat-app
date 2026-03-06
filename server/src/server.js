import app from "./index.js";
import "dotenv/config";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`\nhttp://localhost:${PORT}\n`);
});
