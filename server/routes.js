var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('', controller.movies.get);

router.post('', controller.movies.post);


module.exports = router;
