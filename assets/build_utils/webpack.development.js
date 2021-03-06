const path = require("path");
const DIST_DIR = path.resolve("../backend/static/app");
const config = env => ({
    output: {
        path: DIST_DIR,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});

module.exports = config;
