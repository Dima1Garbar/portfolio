import React from 'react'
import "../styles/Posts.css"

const Posts = ({posts, number}) => {
  return (
    <div className='posts'>
         <div  className='post'>
              <div><strong>Post id: {posts.id}</strong></div>
              <strong>{number}. {posts.name}</strong>
              <div>{posts.body}</div>
          </div>
    </div>
  )
}

export default Posts
