/* eslint-disable no-console */
import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

const port = 3000;

let application = express();

application.use(compression());
application.use(express.static("dist"));

application.get("*", (request, response) => {
    response.sendFile(path.join(__dirname + "/dist/index.html"));
});

application.listen(port, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    open(`http://localhost:${port}`);
});