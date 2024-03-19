const PORT = process.env.PORT ?? 8000;
const express = require("express");
const cors = require("cors");
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
      description: "API Manager for the todo APIs",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: [
    "./routes/taskApi.js",
    "./routes/loginApi.js",
    "./routes/signUpApi.js",
  ],
};

const app = express();
const specs = swaggerJsDoc(options); //swagger api
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs)); //swagger api
app.use(cors());
app.use(express.json());
app.use(indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
