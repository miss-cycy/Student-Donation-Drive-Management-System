import express from 'express'

const app = express()

app.get('', (req, res) => {
  res.send('../src/landing.html')
})

app.listen(3000)