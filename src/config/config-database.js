module.exports = {
    port : process.env.PORT || 4000,
    db : process.env.MONGODB || 'mongodb://localhost:27017/burger',
    SECRET_TOKEN : 'tokencito123',


    //url: 'mongodb://localhost:27017/burger'
 //   url: 'mongodb+srv://managerSpace:123space@burger-tx1lc.mongodb.net/admin'
    url: 'mongodb+srv://managerSpace:123space@burger-tx1lc.mongodb.net/admin?retryWrites=true&w=majority'
}