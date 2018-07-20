const Sequelize = require('sequelize');
const { sequelize } = require('../database');

module.exports = {
    async index (req, res) {
        try {
            const people = await sequelize
                .query('SELECT * from tbl_pessoas')
                .spread((results, metadata) => {
                    return results;
                });
            
            res.send({people});
        } catch (error) {
            res.send({ error });
        }
    },
    async post (req, res) {
        try {
            const personToInsert = req.body;
            console.log(personToInsert);
            const options = {
                replacements: [
                    personToInsert.nome,
                    personToInsert.telefone,
                    personToInsert.email,
                    personToInsert.tipo_id
                ],
                type: Sequelize.QueryTypes.INSERT
            }
            await sequelize.query(
                `INSERT INTO tbl_pessoas (nome, telefone, email, tipo_id)
                VALUES ('${personToInsert.nome}', '${personToInsert.telefone}', '${personToInsert.email}', ${personToInsert.tipo_id});
                `,
                options
            );

            res.send({ status: 'success' });
        } catch (error) {
            res.send({error: 'failed, verify JSON format'});
        }
    }
}