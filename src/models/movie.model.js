import  sequelize, { INTEGER, STRING } from "sequelize";
import { DataTypes } from "sequelize";
import { DESCRIBE } from "sequelize/lib/query-types";

export const movie = sequelize.define("Movie"){
    title:(DataTypes=String)
    (director:DataTypes=String)
    (duration:DataTypes=INTEGER)
    (gender:DataTypes=String)
    (description: DataTypes=String)
    

}