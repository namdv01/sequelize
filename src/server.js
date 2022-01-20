import express from "express"
import bodyParser, { urlencoded } from "body-parser"
import viewEngine from './configs/viewEngine'
import initRoute from './routes/web'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(urlencoded({ extended: true }))
viewEngine(app)
initRoute(app)

const port = process.env.PORT || 1234

app.listen(port, () => {
    console.log('setup backend sequilize success in port:', port)
})