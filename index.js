const express = require("express");
const helmet = require("helmet");
const recipesRouter = require("./routers/recipesRouter");
const ingredientsRouter = require("./routers/ingredientsRouter");
const stepsRouter = require("./routers/stepsRouter");

const server = express();
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());

server.use("/recipes", recipesRouter);
// server.use("/ingredients", ingredientsRouter);
// server.use("/steps", stepsRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Something went wrong",
    });
});

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});
