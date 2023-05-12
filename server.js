const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.set('views','frontend');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index');
})

app.get('/getBirthdayAge', (req, res)=>{
    //since the round off value will return max 99, have added +1 to reach to 100
    const randomNumber = Math.floor(Math. random() * 100)+1;
    res.send(randomNumber.toString());
})

app.listen(3000, function(){
    console.log('server started on port 3000');
})