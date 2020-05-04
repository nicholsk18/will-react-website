const express = require("express");
const next = require("next");
const routes = require("./app");

const auth = require("./middleware/auth");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        const port = process.env.PORT;

        server.use(express.json());

        server.use(routes);

        server.get("/admin/panal", auth, (req, res) => {
            return handle(req, res);
        });

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
