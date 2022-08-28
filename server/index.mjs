import express from "express";

const PORT = process.env.PORT ?? 8080;

const app = express();

app.use("/dist", express.static("dist"));
app.use("/", express.static("public"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
