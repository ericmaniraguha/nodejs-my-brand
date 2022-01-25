const express = require("express");
const res = require("express/lib/response");
const Post = require("./models/Post");
const router = express.Router();

router.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

// create post

router.post("/posts", async (req, res) => {

    const post = new Post({
      
        title: req.body.title,
        content: req.body.content, 
        decription: req.body.description,
        year:req.body.year
  });
  await post.save();
  res.send(post);
});

//individual post
router.get("/posts/:id", async (req, res) => {
  try{  const post = await Post.findOne({ _id: req.params.id })
    res.send(post)
}
    catch {
        res.status(404)
        res.send({error:"Post does not exists!!"})
    }
})

//  update post 
router.patch("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.content) {
			post.content = req.body.content
        }
        if (req.body.description) {
			post.description = req.body.description
        }
        if (req.body.year) {
			post.year = req.body.year
		}

		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

// delete function
router.delete("/posts/:id", async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

module.exports = router
