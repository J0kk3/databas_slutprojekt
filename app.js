const express = require("express");
const mySql = require("mysql2");

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

app.get("/gettablename", (res, req) =>
{
    let sql = "SELECT * FROM Movies;"

    dbConnection.query(sql,(err, res) =>
    {
        if (err) throw err;
        console.log(res);
        res.send(res);
    })
});