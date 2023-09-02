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

let displayGetCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('----------------------')
    console.log(data)
    console.log('----------------------')

    return res.render('./crud/displayCRUD.ejs', {
        dataTable: data
    });

}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        //check user data not found

        // let userData
        return res.render('./crud/editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('Users not found!');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('./crud/displayCRUD.ejs', {
        dataTable: allUsers
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if(id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete the user succeed!')
    } else {
        return res.send('User not found!')
    }

}

module.exports = {
    getHomePage: getHomePage,
    getHomenews: getHomenews,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCrud: displayGetCrud,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}