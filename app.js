const express = require("express");
const mysql = require("mysql2");

const app = express();

app.listen(3000, () =>
{
    console.log("Server listening on port 3000");
});

const dbConnection = mysql.createConnection
({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "30Oktober1988!",
    database: "slutprojekt"
});

dbConnection.connect((err) =>
{
    if (err)
    {
        throw err;
    }
    console.log("MySQL connection established.");
});

app.get("/gettablename", (request, response) =>
{
    let sql = "SELECT * FROM games;"

    dbConnection.query(sql,(err, res) =>
    {
        if (err) throw err;
        console.log(res);
        response.send(res);
    })
});