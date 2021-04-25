const mssql = require("mssql");
var express = require('express');
var router = express.Router();

const config = {
    server : "118.70.125.210",
    user:'sa',
    password:'z@GH7ytQ',
    database:'QuangHoa'
};

mssql.connect(config,(err) =>{
    if(err) console.log(err)
    else console.log("ket noi DB thanh cong");
})

////tao 1 bien de lam viec voi db

const sql = new mssql.Request();

router.get("/ds_DragonPark",(req, res) =>{
    var txt_sql = "select * from Nhom1_DragonPark;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})
router.get("/ds_detail_DragonPark",(req,res) =>{
    var txt_sql = "select * from Nhom1_Detail_DragonPark;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})
router.get("/ds_WaterPark",(req, res) =>{
    var txt_sql = "select * from Nhom1_WaterPark;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})
router.get("/ds_detail_WaterPark",(req, res) =>{
    var txt_sql = "select * from Nhom1_Detail_WaterPark;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})
router.get("/ds_QueenCableCars",(req, res) =>{
    var txt_sql = "select * from Nhom1_QueenCableCars;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})
router.get("/ds_detail_QueenCableCars",(req, res) =>{
    var txt_sql = "select * from Nhom1_Detail_QueenCableCars;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})
router.get("/ds_News",(req, res) =>{
    var txt_sql = "select * from Nhom1_News;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})
router.get("/ds_FoodZone",(req, res) =>{
    var txt_sql = "select * from Nhom1_FoodZone;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})
router.get("/ds_detail_FoodZone",(req, res) =>{
    var txt_sql = "select * from Nhom1_Detail_FoodZone;";
    sql.query(txt_sql,(err, rows) =>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(rows);
        }
    })
})

module.exports = router;