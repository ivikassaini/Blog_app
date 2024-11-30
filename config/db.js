const mongo = require('mongoose');
const connect = async () => {
    try {
        await mongo.connect(process.env.DB_URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Connection Failed",error.message);
    }
}
module.exports = connect;