import { Sequelize } from "sequelize";
import dotinv from 'dotenv'

dotinv.config()

const {
    DB_NAME: database,
    DB_USER: username,
    DB_PASS: password,
    DB_HOST: host,
    DATABASE_URL: allcredentials
} = process.env

/*
const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST*/

const db = new Sequelize(allcredentials/*database, username, password*/, {

    /*host: host,
    port: '3306',
    dialect: 'mysql',*/
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: 0
})


export default db


