// const express = require("express");
import express from "express";
const app = express();

app.listen(5000, () => {
  console.log("Server listening at http://localhose:5000");
});
