module.exports = {
  mongoURI: "mongodb://admin:officialcodes007@cluster0-shard-00-00.1wkw3.mongodb.net:27017,cluster0-shard-00-01.1wkw3.mongodb.net:27017,cluster0-shard-00-02.1wkw3.mongodb.net:27017/WellWomen?ssl=true&replicaSet=atlas-nrkdvr-shard-0&authSource=admin&retryWrites=true&w=majority",
  secretOrKey: "secret"
};

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production' 
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:3000'
