import {
    Model, Optional, DataTypes
} from "sequelize";
import sequelize from "../../sequelize";
interface AgendaAttributes {
    id?: number;
    item?: string;
    color?: string;
}

export interface AgendaInput extends Optional<AgendaAttributes, "id">{}
export interface AgendaOutput extends Required<AgendaAttributes>{}

export class Agenda extends Model {
    declare id: number;
    declare item: string;
    declare color: string;
}

Agenda.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    item: {
        type: DataTypes.STRING(150)
    },
    color: {
        type: DataTypes.STRING(25)
    }
}, {
    sequelize: sequelize,
    freezeTableName: true,
    timestamps: false
})