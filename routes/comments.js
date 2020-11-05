var express = require('express');
var router = express.Router();
var comments = [{id:1, comment:""}, {id:6, comment:"ILoveU"}];

/* GET Comments page. */
router.get('/', function(req, res) {
  res.json(comments);
});

router.post('/:id', function(req, res) {
  commId = req.params.id;
  const newComments = req.body;
  newComments.id = commId;
  comments.push(newComments);
  res.json(comments);
});

router.put('/:id', function(req, res) {
  updateComments = req.body;
  commId = req.params.id;
  comments.forEach(commentyyy => {
    if (commentyyy.id === parseInt(commId)){
       commentyyy.comment = updateComments.comment;
    }
  })
  res.json(comments);
  });

  router.delete('/:id', function(req, res) { 
  res.json({comments:comments.filter(commentyyy => commentyyy.id !== parseInt(req.params.id))});
  });
  
module.exports = router;
