const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const surveys = require("./routes/api/surveys");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use("/api/surveys", surveys);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
