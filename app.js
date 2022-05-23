const express = require("express");
const mysql = require("mysql2");

const app = express();

app.listen(3000, () =>
{
    console.log("Server listening on port 3000");
});

//database connection
const dbConnection = mysql.createConnection
({
    host: "localhost",
    port: "3000",
    user: "root",
    password: "yourpassword",
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
//CREATE
app.get("/create", (request, response) =>
{
    let sql = "INSERT INTO movies VALUES (DEFAULT, 'Pulp Fiction', 2, 8.9, '1994');"

    dbConnection.query(sql,(err, res) =>
    {
        if (err) throw err;
        console.log(res);
        response.send(res);
    })
});
//READ
app.get("/select", (request, response) =>
{
    let sql = "SELECT * FROM games;"

    dbConnection.query(sql,(err, res) =>
    {
        if (err) throw err;
        console.log(res);
        response.send(res);
    })
});
//UPDATE
app.get("/update", (request, response) =>
{
    let sql = "UPDATE games SET game_rating = 9 WHERE id = 1;"

    dbConnection.query(sql,(err, res) =>
    {
        if (err) throw err;
        console.log(res);
        response.send(res);
    })
});
//DELETE
app.get("/delete", (request, response) =>
{
    let sql = "DELETE FROM publishers WHERE id = 3;"
    dbConnection.query(sql,(err, res) =>
    {
        if (err) throw err;
        console.log(res);
        response.send(res);
    })
});
