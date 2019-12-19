if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb+srv://khangtran:YwdYpWrxatIfXtbY@cluster0-jkqto.mongodb.net/vidjot-dev?retryWrites=true&w=majority'
    }
} else {
    module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' }
}