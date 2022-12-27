let menu = require('../data/menu.json')

module.exports = {
    index: (req, res) => {
        res.render('index',{
            menu : menu
        })
    }
}