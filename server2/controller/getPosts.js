const Post = require('../models/posts-model')

getPosts = (req, res) => {
     Post.find({}, (err, Post) => {
        if (err) {
            return res.status(200).json({ success: false, error: err })
        }
        if (Post.length == 0) {
             return res
                .status(200)
                .json({ success: false, error: `Posts not found` })
        }
        return res.status(200).json({ success: true, data: Post })
    }).catch(err => console.error(err))
}

module.exports = { getPosts }