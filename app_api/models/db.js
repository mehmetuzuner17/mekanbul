var mongoose = require('mongoose');
//var dbURI = "mongodb://localhost/mekanbul";
var dbURI ="mongodb+srv://mekan32:mekan32@mekanbul.i7z3b1e.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI);
function kapat(msg, callback){
    mongoose.connection.close(function (){
        console.log(msg);
        callback();
    })
}
process.on("SIGINT", function (){
    kapat("Uygulama kapatıldı!", function (){
        process.exit(0);
    })
})
mongoose.connection.on("connected", function(){
    console.log(dbURI + "adresindeki veritabanına bağlanıldı!\n")
})
mongoose.connection.on("error", function(){
    console.log(dbURI + "Bağantı hatası\n")
})
mongoose.connection.on("disconnected", function(){
    console.log(dbURI + "Bağlantı kesildi\n")
})


require("./mekansema");