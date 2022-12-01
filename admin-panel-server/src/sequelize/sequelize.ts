import { Sequelize } from "sequelize";

const sequelize = new Sequelize("imkersverenigingsd", "root", "", {
    dialect: "mariadb"
});

export default sequelize;