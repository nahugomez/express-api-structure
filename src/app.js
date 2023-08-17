import express, { json } from "express";
import { exampleRouter } from "./routes/exampleRoutes.js";
import dotenv from "dotenv";
// import { corsMiddleware } from "./middlewares/cors.js";

// Creamos una instancia de Aplicación Express
const app = express();

// De esta manera podemos acceder a las variables de entorno definidas en el .ENV
dotenv.config();

const PORT = process.env.PORT ?? 1717;

// Configuraciones de la aplicación
// app.use(corsMiddleware({})); --> Des-comentar para habilitar CORS. Acepta una propiedad acceptedOrigins: string[]
app.use(json());
app.disable("x-powered-by");

// ENDPOINT de prueba
app.get("/", (_req, res) => {
    res.json("App is running");
});

// Configuración de Rutas
app.use("/example", exampleRouter);

app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}`);
});
