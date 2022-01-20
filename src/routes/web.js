import express, { Router } from "express"

const router = express.Router()

const initRoute = (app) => {
    router.get('/', (req, res) => {
        return res.send('hello,I am Nam')
    })

    return app.use('/', router)
}

module.exports = initRoute