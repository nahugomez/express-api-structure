import { Router } from "express";
import { ExampleController } from "../controllers/exampleController.js";
export const exampleRouter = Router();

exampleRouter.get("/", ExampleController.doSomethingGet);
exampleRouter.post("/", ExampleController.doSomethingPost);

exampleRouter.get("/boletin/:ID", ExampleController.getBoletinByID);
