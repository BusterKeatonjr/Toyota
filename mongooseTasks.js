var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " сделал врум")
}

var car = mongoose.model('car', schema)

var kitty = new car({ name: 'Машина' })
kitty.save(function (err) {
    kitty.meow()
})

