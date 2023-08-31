import db  from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

let getHomenews = (req, res) => {
    return res.render('./test/news.ejs');
}

let getCRUD = (req, res) => {
    return res.render('./crud/crud.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message)
    return res.send("post crud from server");
}

module.exports = {
    getHomePage: getHomePage,
    getHomenews: getHomenews,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}