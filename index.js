const http = require("http")
require("dotenv").config()

// create the server
const server = http.createServer((req, res) => {
    // define the status and content type of server instance
    res.writeHead(200, {"Content-Type": "text/plain"})

    // write the server response
    res.write("Okay, let's go with the world")
    // then send the response
    res.end()
})

// bind the server to port 3000
server.listen(process.env.PORT, (error) => {
    if(error) {
        // print this in case there's error
        console.log("Something went wrong")
    } else {
        // print this if everyhting goes fine
        console.log(`Server run on PORT ${process.env.PORT} with success`)
    }
})