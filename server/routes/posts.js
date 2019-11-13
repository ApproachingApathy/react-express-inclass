var express = require('express');
var router = express.Router();

const models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(models)
    models.Blog_Post.findAll({attributes:['id', 'title', 'meta', 'createdAt', 'updatedAt']})
    .then((data) => res.json(data))
    .catch((reason) => {
        // console.log(reason)
        res.statusCode = 500
        res.send("server error")
    })

});

router.get('/:id', (req, res, next) => {
    models.Blog_Post.findOne({where:{id:req.params.id}, attributes:['id', 'title', 'meta', 'createdAt', 'updatedAt']})
    .then((data) => {
        if (!data) {
            res.statusCode = 404
            res.send('Not Found')
        } else res.json(data)
    })
    .catch((reason) => {
        res.statusCode = 500
        res.send('server error')
    })
})

module.exports = router;