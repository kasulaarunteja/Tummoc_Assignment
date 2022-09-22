const express = require('express');
const connect = require('./configs/db');
const cors = require('cors')


const userController = require("./controllers/user.controller");
const {register, login , newToken} = require("./controllers/auth.controller");


const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*',
    credential: true,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  }),
)


app.get('/', (req, res) => {
  return res.send('hello good')
})

app.post("/register", register)
app.post("/login", login)
app.use("/users". userController)




app.listen(process.env.PORT || 8080, async () => {
  try {
    await connect()
  } catch (err) {
    console.error(err.message)
  }
  console.log('listening on port 8080')
})
