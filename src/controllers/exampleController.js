import { ExampleModel } from "../models/exampleModel.js";

export class ExampleController {
    static async doSomethingGet(req, res) {
        res.json("Routing is working");
    }

    static async doSomethingPost(req, res) {
        const { name, lastName } = req.body;
        const result = await ExampleModel.doSomeStuff({ name, lastName });
        res.json(result);
    }

    static async getBoletinByID(req, res) {
        const { ID } = req.params;
        const boletin = await ExampleModel.getBoletinByID({ ID });

        // Se verifica que exista boletin, y si existe se retorna como JSON al cliente
        if (boletin) return res.json(boletin);

        // No existe, se retorna un 404 con un mensaje.
        res.status(404).json({ message: "Boletin not found" });
    }
}
