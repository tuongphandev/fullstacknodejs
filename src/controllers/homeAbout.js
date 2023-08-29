
let getHomePage = (req, res) => {
    return res.send('hello world with Tun from About')
}


module.exports = {
    getHomePage: getHomePage,
}