import express from "express";
import homeController, { getHomePage } from "../controllers/homeController";
import homeAbout from "../controllers/homeAbout";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/tuongphandev', (req, res) => {
        return res.send('hello world with Tun from tuongphandev')
    });
    router.get('/crud', homeController.getCRUD);
    router.get('/about', homeAbout.getHomePage);
    router.get('/news', homeController.getHomenews);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCrud);
    router.get('/edit-crud', homeController.getEditCRUD);
    
    router.post('/put-crud', homeController.putCRUD);

    return app.use("/", router);
}

module.exports = initWebRoutes;