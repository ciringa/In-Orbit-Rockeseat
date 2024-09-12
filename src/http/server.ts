import { app } from "../lib/app";
import { HOST, PORT } from "../lib/env";

const port = Number(PORT);
const host = HOST;

app.listen(
  {
    port,
    host,
  },
  (err, path) => {
    console.log(err || `${path}/app`);
  }
);
