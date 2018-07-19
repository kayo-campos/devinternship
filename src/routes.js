const PessoasController = require('./controllers/PessoasController');

module.exports = (app) => {
    app.get(
        '/get',
        PessoasController.index
    )

};