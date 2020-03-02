const express = require('express')
const router = express.Router();
const count = require('./word-counter')

let nameList = count.finalArray

router.get('/', (req,res)=> {
    res.send('You can a search a name to see the number of occurrences it appears within file. e.g. name-count/Oliver')
});

router.get('/:name', (req,res)=> {
    const exists = nameList.some(nameList => nameList.name === req.params.name);

    if (exists){
      res.json(nameList.filter(nameList => nameList.name === req.params.name))
    }else {
        res.status(400).json({
            message: `No name with the label [${req.params.name}] found in counts.`
        })
    }
});



module.exports = router;