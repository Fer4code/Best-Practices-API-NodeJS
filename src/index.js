const ex = require('express')
const v1WorkoutRouter = require('./v1/routes/workout-routes')
const bodyParser = require('body-parser')

const app = ex()

const PORT = process.env.PORT || 3000

app.use(ex.json())
app.use('/api/v1/workouts', v1WorkoutRouter)


app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}`)})