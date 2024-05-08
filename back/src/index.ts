import "reflect-metadata";
import server from "./server";
import { PORT, PROTO, HOST } from "./config/envs";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected");
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PROTO}://${HOST}:${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });