const express = require('express');
const app = express();
const port = 3200;

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){
        console.log("Error in starting up the Server at " + port);
    }
    console.log(`Server up and running at port ${port}`);
})