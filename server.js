const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./Routes/api/Items')
const Scholarships = require('./Routes/api/Scholarships')

const app = express();
//sudo killall -9 node
//BodyParser Middleware

app.use(bodyParser.json());

//DB Config
const db = require('./Config/Keys').mongoURI;

// Conect to Mongo
mongoose
    .connect(db)
    .then(() => console.log("Connected"))
    .catch(err => console.log('err'));

    //Use Routes
    app.use('/api/Items', items)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on ${port}`));



//.................................................................Files Upload..................
const multer = require('multer')
const cors = require('cors')

app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
       cb(null, Date.now() + '-' + file.originalname)   
    },
});

const upload = multer({storage}).array('file')

app.post('/upload', (req, res) => {
    upload(req,res, (err) =>  {
        if (err) {
            return res.status(500).json(err)
        }
            return res.status(200).send(req.file)
    })
});
app.listen(8000, () => {
    console.log('App is runing also on 8000')
})