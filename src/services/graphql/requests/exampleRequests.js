import { ExampleQueries } from "../queries/exampleQueries.js";
import { FetchRequest } from "../tools/FETCHRequest.js";

// El data.data se debe a que AXIOS devuelve su información en un objeto llamado data, y HASURA también devuelve su información en un objeto data
export const ExampleRequest = {
    getBoletinByID: async (ID) => {
        const response = await FetchRequest({
            query: ExampleQueries.getBoletinByID,
            variables: {
                IDBoletin: ID,
            },
        });
        return response.data;
    },
};
