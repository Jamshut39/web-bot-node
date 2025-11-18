import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bot Node API",
      version: "1.0.0",
      description: "Node.js Express + MongoDB uchun API hujjati (Swagger)",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Building Server",
      },
    ],
  },
  apis: ["./routes/*.js"], // router fayllardagi @swagger kommentlarini o‘qiydi
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger Docs available at http://localhost:5000/api-docs");
};
