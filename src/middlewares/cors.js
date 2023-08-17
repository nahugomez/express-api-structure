import cors from "cors";

// En esta parte se definen que orígenes pueden comunicarse con la API para acceder a los recursos desde el navegador.
const ACCEPTED_ORIGINS = ["http://localhost:1717"];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS }) =>
    cors({
        origin: (origin, callback) => {
            if (acceptedOrigins.includes(origin)) {
                return callback(null, true);
            }

            if (!origin) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
    });
