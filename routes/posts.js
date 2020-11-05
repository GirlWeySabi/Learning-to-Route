var express = require('express');
var router = express.Router();
var posts = [{id:1, post:""}, {id:6, post:"gist"}];

/* GET Posts page. */
router.get('/', function(req, res, next) {
  res.json(posts);
});

router.post('/:id', function(req, res) {
  postId = req.params.id;
  const newPosts = req.body;
  newPosts.id = postId
  posts.push(newPosts);
  res.json(posts);
});

router.put('/:id', function(req, res) {
  const updatePosts = req.body;
  postId = req.params.id;
  posts.forEach(postyyy => {
    if (postyyy.id === parseInt(postId)){
      postyyy.post = updatePosts.post;
    }
  })
  res.json(posts);
  });

  router.delete('/:id', function(req, res) { 
  res.json({posts:posts.filter(postyyy => postyyy.id !== parseInt(req.params.id))});
  });

module.exports = router;
