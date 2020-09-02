module.exports = {
  mongoURI: "mongodb+srv://admin:officialcodes@007@cluster0.1wkw3.mongodb.net/WellWomen?retryWrites=true&w=majority",
  secretOrKey: "secret"
};

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production' 
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:3000'
