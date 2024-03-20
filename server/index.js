const PORT = process.env.PORT ?? 8000;
const express = require("express");
const cors = require("cors");
require('dotenv').config()   
const indexRouter = require("./routes/index");
const swaggerUI = require("swagger-ui-express"); //swagger api
const swaggerJsDoc = require("swagger-jsdoc"); //swagger api

const options = {
  //swagger api test
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Internal API Manager",
      version: "1.0.0",
      description: `${process.env.NODE_ENV && process.env.NODE_ENV === process.env.NODE_ENV_VERIFY && "API Manager for the todo API" || "Service only available on development. Please contact admin for access."}`,
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: [
    `${process.env.NODE_ENV && process.env.NODE_ENV === process.env.NODE_ENV_VERIFY && "./routes/taskApi.js"}`
  ],
};

const app = express();
const specs = swaggerJsDoc(options) //swagger api
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(cors());
app.use(express.json());
app.use(indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
