const Post = require('../models/posts-model')

postCreate = (req, res) => {
    let body = req.body

    if (!body) {

        
        res.send({error:'No body'})
    }

    let post = new Post(body)
   
    if (!post) {
        
        res.send({error:'No post'})
    } else {
       
        // res.send('success')

        post.save()
            .then(doc => {
                res.send(doc)

            }).catch(error => {
               
                rej.send(error)
            })
    }
}

module.exports = {postCreate}