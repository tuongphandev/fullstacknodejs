import express from "express";
import homeController, { getHomePage } from "../controllers/homeController";
import homeAbout from "../controllers/homeAbout";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/tuongphandev', (req, res) => {
        return res.send('hello world with Tun from tuongphandev')
    });
    router.get('/about', homeAbout.getHomePage);
    router.get('/news', homeController.getHomenews);

    return app.use("/", router);
}

module.exports = initWebRoutes;