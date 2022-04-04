import express from "express";
import cors from "cors";
import { connectDb } from "./mongodb";
import { apiRouter } from "./routers/api-router/apiRouter";
import bodyParser from "body-parser";
// import expressJwt from "express-jwt";
// import { SECRET } from "./routers/secret";
const PORT = 4000;

const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
// app.use(
//   expressJwt({
//   secret: SECRET,
//   algorithms: []
// }).unless({
//     path: [
//     ],
//   })
// );

// app.use("/homepage", homepageRouter);
// app.use("/restaurants", restaurantsRouter);
// app.use("/chefs", chefsRouter);
app.use("/api", apiRouter);
app.use(express.static("public"));
startServer();

async function startServer() {
  await connectDb();
  app.listen(PORT, () => console.log(`Server is up at ${PORT}`));
}
