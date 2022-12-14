const express = require('express')
const cors = require('cors')

const app = express()
const port = 8080



app.use(cors())
app.get('/', (req, res) => {
  res.send({
    "courses":[
      "Python",
      "Java",
      "PHP",
      "JS",
      "JS",
      "JS",
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;