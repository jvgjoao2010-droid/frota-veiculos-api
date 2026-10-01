import express from 'express'
import veiculosRoutes from './src/routes/veiculos.routes'

const app = express()
const port = 3000

app.use(express.json())

app.use('/veiculos', veiculosRoutes)

app.listen(port, ()) =>
