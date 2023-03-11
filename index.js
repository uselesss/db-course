require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const { Sayings } = require('./models/models');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

async function saying(req, res) {
    const { uuid } = req.query;
    const saying = await Sayings.findOne({
        where: uuid && { uuid }, 
        order: [
            [sequelize.literal('RAND()')]
        ]},
    );
    if (!saying) return res.status(400).json({ message: `Пословица с uuid ${uuid} не найдена` });
    return res.json(saying);
}

app.get('/api/saying', saying);

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
