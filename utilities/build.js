/* eslint-disable no-console */
import webpack from "webpack";
import webpackConfig from "../webpack.config.production";
import colors from "colors";

process.env.NODE_ENV = "production";

console.log("Generating minified bundle for production via Webpack.  This is going to take some time".blue);

webpack(webpackConfig).run((error, stats) => {
    if (error) {
        console.log(error.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        return jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log("The application was built with production and written to the '/dist' folder".green);
    return 0;

});


