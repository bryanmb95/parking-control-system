module.exports = (express, bodyParser) => {
    const app = express();
    app.use(bodyParser.json());
    app.use("/user", require("./user-routes.js")(express));
    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => {
        console.log("Listening on port " + port);
    });
    return app;
};