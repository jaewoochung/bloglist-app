const mongoose = require('mongoose')

const url =
  `mongodb+srv://fullstack:enigma@clusterfullstack.kki4g.mongodb.net/blog-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const blog = new Blog({
  title: "Blind 75",
  author: "Mikhail Zhitorev",
  url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions",
  likes: 7
})

blog.save().then(result => {
  console.log('blog saved!')
  mongoose.connection.close()
})