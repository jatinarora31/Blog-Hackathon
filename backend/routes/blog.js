const express = require('express')
const pool = require('../util/db')
const result = require('../util/result')

const router = express.Router()



router.post('/',(req,res) => {
    const {title,contents,category_id} = req.body
    const user_id = req.headers.user_id
    const sql = "insert into blogs(title,contents,user_id,category_id) values(?,?,?,?)"
    pool.query(sql,[title,contents,user_id,category_id],(err,data) => {
        if(err) {
            res.send(result.createResult(err))
        }
        else {
            res.send(result.createResult(err,data))
        }
    })
})

router.get('/',(req,res) => {
    const user_id = req.headers.user_id
     console.log(user_id)
    const sql = "select * from blogs where user_id = ?"
    pool.query(sql,[user_id],(err,data) => {
        if(err) {
            res.send(result.createResult(err))
        }
        else {
            res.send(result.createResult(err,data))
        }
    })
})

router.patch('/',(req,res) => {
    const user_id = req.headers.user_id
    const {title,contents,category_id,blog_id} = req.body
    const sql1 = "update blogs set title = ?, contents = ?, user_id = ?, category_id = ? where blog_id = ?"
    pool.query(sql1,[title,contents,user_id,category_id,blog_id],(err,data) => {
        if(err) {
            res.send(result.createResult(err))
        }
        else if(data) {
            res.send(result.createResult(err,data))

        }
    })
})

router.delete('/',(req,res) => {
    const {blog_id} = req.body
    const sql = "delete from blogs where blog_id = ?"
    pool.query(sql,[blog_id],(err,data) => {
        if(err) {
            res.send(result.createResult(err))
        }
        else {
            res.send(result.createResult(err,data))
        }
    })
})

router.post('/search',(req,res) => {
    const {text} = req.body
    const searchPattern = '%'+text+'%'
    const sql = "select * from blogs where title like ?"
    pool.query(sql,[searchPattern],(err,data) => {
        if(err) {
            res.send(result.createResult(err))
        }
        else {
            res.send(result.createResult(err,data))
        }
    })
})

module.exports = router