const PessoasController = require('./controllers/PessoasController');

module.exports = (app) => {
    app.get(
        '/get',
        PessoasController.index
    ),
    app.post(
        '/post',
        PessoasController.post
    )
};