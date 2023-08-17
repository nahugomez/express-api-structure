export const ExampleQueries = {
    getBoletinByID: `query GetBoletinByID($IDBoletin: Int) {
        boletin(where: {id_boletin: {_eq: $IDBoletin}}) {
          anio
          dia
          id_boletin
          mes
          numero
        }
    }`,
};
