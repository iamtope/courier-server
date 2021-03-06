const config = require("./index");
const mongoose = require("mongoose");

console.log(config.mongoUrl);

module.exports = app => {
    mongoose.connect(config.mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).then(res => console.log("connected to database successfully")).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    mongoose.set('useCreateIndex', true)
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);

    if (app) {
        app.set("mongoose", mongoose);
    }
};

function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}
