import showBlogs from './components/showBlogs'
import addBlog from './components/addBlog'
import singleBlog from './components/singleBlog'

export default [
  {path:'/', component: showBlogs}, //root
  {path:'/add', component: addBlog},
  {path:'/blog/:id', component: singleBlog}
]
