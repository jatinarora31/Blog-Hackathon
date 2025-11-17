const express = require('express')
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/category')
const blogRouter = require('./routes/blog')
const authorizeUser = require('./util/auth')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(authorizeUser)
app.use('/user',userRouter)
app.use('/category',categoryRouter)
app.use('/blog',blogRouter)

app.listen(4000, 'localhost', () => {
    console.log('Server started at port 4000')
})