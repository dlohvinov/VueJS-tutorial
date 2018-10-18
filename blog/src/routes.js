import showBlogs from './components/showBlogs'
import addBlog from './components/addBlog'

export default [
  {path:'/', component: showBlogs}, //root
  {path:'/add', component: addBlog}
]
