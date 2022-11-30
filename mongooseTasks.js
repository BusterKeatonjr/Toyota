var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var car = mongoose.model('car', { name: String })

var cars = new car({ name: 'Машина' })
cars.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Врум')
    }
})
