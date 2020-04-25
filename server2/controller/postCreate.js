const Post = require('../models/posts-model')

postCreate = (req, res) => {

    console.log(req.body)
    let body = req.body
    if (!body) {
        res.send({ error: 'No body' })
    }
    let post = new Post(body)
    if (!post) {
        res.send({ error: 'No post' })
    } else {
        post.save()
            .then(doc => {
                res.send(doc)
            }).catch(error => {
                rej.send(error)
            })
    }
}

module.exports = { postCreate }