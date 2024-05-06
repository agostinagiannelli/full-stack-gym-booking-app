import "reflect-metadata";
import server from "./server";
import { PORT, PROTO, HOST } from "./config/envs";

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// server.listen(PORT, HOST, () => {
//     console.log(`Server is listening on port ${PROTO}://${HOST}:${PORT}`);
// });