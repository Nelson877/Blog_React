import React from 'react'
import '../components/BlogList.css'
import BlogItem from './BlogItem'

const BlogList = ({blogs}) => {
  return (
    <div className='blogList'>
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.id}/>
        ))}
    </div>
  )
}

export default BlogList