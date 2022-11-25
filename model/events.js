var mongoose=require('mongoose');
var schema=mongoose.Schema;


var event= new schema({
    name:String,
    city:String,
    nbplace:Number,
    etat:Boolean
})

module.exports=mongoose.model('events',event);