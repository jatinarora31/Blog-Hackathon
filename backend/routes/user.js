const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../util/db')
const config = require('../util/config')
const result = require('../util/result')

const router = express.Router()

router.post('/signin',(req,res) => {
    const {email,password} = req.body
    const sql = "select * from users where email = ?"
    pool.query(sql,[email,password],(err,data) => {
        if(err) {
            res.send(result.createResult(err))
        }
        else if(data.length == 0) {
            res.send(result.createResult('Invalid Email'))
        }
        else {
            bcrypt.compare(password,data[0].password,(err,passwordStatus) => {
                if(passwordStatus) {
                    const payload = {
                        user_id : data[0].user_id
                    }
                    const token = jwt.sign(payload,config.SECRET)
                    const user = {
                        token,
                        full_name : data[0].full_name,
                        email : data[0].email,
                        phone_no : data[0].phone_no
                    }
                    res.send(result.createResult(null, user))
                }
                else
                    res.send(result.createResult('Invalid Password'))
            })
        }
    })
})

router.post('/signup', (req, res) => {
    const {full_name,email,password,phone_no} = req.body
    const sql = `INSERT INTO users(full_name,email,password,phone_no) VALUES (?,?,?,?)`
    // create the hashedpassword
    bcrypt.hash(password, config.SALT_ROUND, (err, hashedPassword) => {
        if (hashedPassword) {
            pool.query(sql, [full_name, email, hashedPassword, phone_no], (err, data) => {
                res.send(result.createResult(err, data))
            })
        } else
            res.send(result.createResult(err))
    })
})

router.post('/',(req,res) => {
    console.log('post ,method')
    res.send('post method')
})

router.get('/',(req,res) => {
    const {full_name,email,password,phone} = req.body
    const sql = "select * from users where uid = ?"
    pool.query(sql,[full_name,email,password,phone],(err,data) => {

    })
    console.log('get')
})

module.exports = router