/* eslint-disable no-console */
import fs from "fs";
import cheerio from "cheerio";
import colors from "colors";

fs.readFile("src/index.html", "utf8", (error, markup) => {
    if (error) {
        return console.log(error.red);
    }

    const $ = cheerio.load(markup);

    $("head").prepend('<link rel="stylesheet" href="styles.css">');

    fs.writeFile("dist/index.html", $.html(), "utf8", function (error) {
        if (error) {
            return console.log(error.red);
        }
        console.log("index.html was successfully written to the '/dist' folder".green);

    });
});