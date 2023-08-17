import { ExampleRequest } from "../services/graphql/requests/exampleRequests.js";

export class ExampleModel {
    static async doSomeStuff({ name, lastName }) {
        // Lógica de negocio que le corresponde al modelo.
        const completeName = `${name} ${lastName}`;
        return completeName;
    }

    static async getBoletinByID({ ID }) {
        const boletin = await ExampleRequest.getBoletinByID(ID);
        return boletin;
    }
}
