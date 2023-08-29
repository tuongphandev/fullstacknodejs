import db  from "../models/index";
// let getHomePage = (req, res) => {
//     return res.send('hello world from controller')
// }

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

// Object: {
//     key: ''
//     value: ''
// }

module.exports = {
    getHomePage: getHomePage,
    getHomenews: getHomenews,
}