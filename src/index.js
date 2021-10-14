const app = require('./config/express')
const mongoose = require('./config/mongoose')


mongoose.dbconnect()

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
  })
