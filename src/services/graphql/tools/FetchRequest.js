// En realidad, no iría el Admin Secret, sino el JWT correspondiente a la aplicación con sus roles. De momento, para prueba usar Admin Secret.
export const FetchRequest = async (body) => {
    const response = await fetch(process.env.HASURA_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
        },
        body: JSON.stringify(body),
    });
    return response.json();
};
