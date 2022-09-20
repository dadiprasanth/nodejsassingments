const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    topic:{type:String},
    description: {type:String},
    posted_at: {type:String},
    posted_by: {type:String},

    // Your code goes here
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;