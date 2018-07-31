
module.exports = function (app) {

    app.all("*", (req, res, next) => {
        console.log('Routes "*" hit, redirecting to public/index');
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

}