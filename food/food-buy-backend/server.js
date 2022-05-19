import Mongoose from "mongoose"
import Express from "express"
import Cors from "cors"
import pies from "./dbPies.js"


//app config

const app = Express()
const connection_url = "mongodb://localhost/food-buy-backend"
const port = process.env.PORT || 6000

//middle wares

app.use(Express.json())
app.use(Cors())

//udb config

Mongoose.connect(connection_url)

//API endpoints

app.get("/", (req, res) => { res.status(200).send("Hello World") })

app.post("/pies", (req, res) =>
{
    const piesPlace = req.body

    pies.create(piesPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


app.get("/pies", (req, res) =>
{
    pies.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


//listening

app.listen(port, () => console.log(`Listening on localhost:${port}`))