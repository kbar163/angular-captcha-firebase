//Install express server
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors({
    origin : '*'
}));


// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-captcha'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join('./dist/angular-captcha/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);