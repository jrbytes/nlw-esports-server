import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! Live long and prosper! 🖖')
})

app.listen(3000, () => {
  console.log('Live long and prosper! 🖖')
})