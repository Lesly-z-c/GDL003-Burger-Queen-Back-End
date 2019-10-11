module.exports = {
    port : process.env.PORT || 4000,
    db : process.env.MONGODB || 'mongodb://localhost:27017/burger',
    SECRET_TOKEN : 'tokencito123',

//url: 'mongodb://localhost:27017/menuSpace'
url:'mongodb+srv://managerSpace:123abc@burger-tx1lc.mongodb.net/Burger?retryWrites=true&w=majority'
    //url: 'mongodb://localhost:27017/burger'
 //url: 'mongodb+srv://managerSpace:123space@burger-tx1lc.mongodb.net/test'
   //url: 'mongodb+srv://managerSpace:123space@burger-tx1lc.mongodb.net/test?retryWrites=true&w=majority'
}