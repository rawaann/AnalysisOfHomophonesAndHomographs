const {app} = require('./app')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rawanelkhouly:fairytale@cluster0.pya8q.mongodb.net/BachelorProject?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true}).then(console.log("pass"))
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

app.listen(3000)