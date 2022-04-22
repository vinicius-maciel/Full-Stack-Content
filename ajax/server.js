const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com suceso.')
    })

})


app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1

    })

})

app.get('/parOuImpar', (req, res) => {

    // RECEBER DADOS DO FRONT-END

    // req.body
    // req.query get?parms
    // req.params /:numero

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
// app.get('/teste', (req, res) => res.send("Ok"))
app.listen(8081, () => console.log('Executando...'))