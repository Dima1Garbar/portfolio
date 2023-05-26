import React, { useEffect, useMemo, useRef, useState } from 'react'
import "../styles/Skills.css"
import Posts from './Posts'

const Skills = () => {

  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0)
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const [arrayPages, setArrayPages] = useState([])
  const lastElement = useRef()
  const observer = useRef()
  const [pushButton, setPushButton]  = useState(true)
  const [totalPosts, setTotalPosts] = useState()
  const [selectPages, setSelectPages] = useState(8)


  useEffect( () => {
      for (let i = selectPages-7; i <= selectPages; i++){
        if (selectPages == totalCount && i == selectPages){
          setArrayPages(arrayPages => [...arrayPages, i])
        }
        else {
          if (i == selectPages -7){setArrayPages([i])}
          else if (i == selectPages){
            setArrayPages(arrayPages => [...arrayPages, totalCount])
          }
          else{
            setArrayPages(arrayPages => [...arrayPages, i])
          }
        }
      }
    
  }, [totalCount, selectPages])
 

  useEffect( () => {
    
    var callback = (entries, observer) => {
      if (totalPosts === 0) return
      if (observer.current) observer.current.disconect();
      if (entries[0].isIntersecting && page < totalCount){
        setPage(page +1)
        if (page >= 4){
          if (page < totalCount -4){
            setSelectPages(page +4)
          }
          else {
            setSelectPages(totalCount)
          }
        }
      }
    }
    
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [posts] )


  useEffect( () => {
    fetchPosts();
  }, [page])

  useMemo ( () => {
    setTotalPosts(posts.length)
  }, [posts]
  )

  async function fetchPosts() {
    await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`)
      .then(response => (setTotalCount(Math.ceil(response.headers.get("x-total-count") / limit)), response.json()))
      .then(response => {pushButton == false ? setPosts(posts => [...posts, ...response]) : setPosts(response); setPushButton(false)})
      .catch(err => console.error(err))
    }
  
  return (
    <div className='global_page'>  
      <p className='title_name'><strong>Here I implement some functions to show what I know and can do on React</strong></p>
      <div className='buttons_pages'>
        {arrayPages.map((array, index) => (index+1 <= 7
        ? [ ((page > 4 && index == 0) && [
        (<div onClick={() => {setPushButton(true); setPage(1);setSelectPages(8)}}
        key={index}
        className={page === array ? "page page_current" : "page"}>{1}</div>),
        (<div className='dots'>...</div>)
      ]),
        (<div onClick={() => {setPushButton(true); setPage(array); 
        if (index >= 4){
          if (array < totalCount -4){
            setSelectPages(array +4)
          }
          else {
            setSelectPages(totalCount)
          }
        }
        else{
          if (array > 4){
            if (index === 0){
              setSelectPages(selectPages - (index+3))
            }
            else if (index === 1){
              setSelectPages(selectPages - (index+1))
            }
            else if (index === 2){
              setSelectPages(selectPages - (index-1))
            }
          }
          else {
            setSelectPages(8)
          }
        }
      }}
        key={index}
        className={page === array? "page page_current" : "page"}>{array}</div>)]
        : (page >= totalCount -4 
          ? 
            <div onClick={() => {setPushButton(true); setPage(array);setSelectPages(totalCount)}}
            key={index}
            className={page === array ? "page page_current" : "page"}>{array}</div>
          :
            [(<div className='dots'>...</div>),
            <div onClick={() => {setPushButton(true); setPage(array);setSelectPages(totalCount)}}
            key={index}
            className={page === array ? "page page_current" : "page"}>{array}</div>]
          )
          
        
        )
      )}
      </div>
      <div className='block_of_posts'>
        {posts.map((posts, index)  =>  (index === totalPosts -1
        ? 
          [ (<div ref={lastElement} className='horizon'></div>),
            (<Posts key={index} posts={posts} number={index +1}/>)]
        : <Posts key={index} posts={posts} number={index +1}/>) 
       )}
      </div>
      <div ref={lastElement} className='observ horizon' ></div>
    </div>
  )
}

export default Skills
