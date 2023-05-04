import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { getAPI } from '../../utils/FetchData'
import { IBlog } from '../../utils/Type'

import CardHoriz from '../cards/CardHoriz'

const Search = () => {
  const [search, setSearch] = useState('')
  const [blogs, setBlogs] = useState<IBlog[]>([])

  const { pathname } = useLocation()

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if(search.length < 2) return setBlogs([]);

      try {
        const res = await getAPI(`search/blogs?title=${search}`)
        setBlogs(res.data)
      } catch (err) {
        console.log(err)
      }
    }, 400)

    return () => clearTimeout(delayDebounce)
  },[search])


  useEffect(() => {
    setSearch('')
    setBlogs([])
  },[pathname])

  return (
    <div className="flex w-full position-relative me-4">
      <div className='flex border-gray position-relative'>
      <p className='pt-2 fs-4 fw-bolder'>Project Works, research Topics, Seminar Documents and lots of Research and Educational Materials Available in Ms word format</p>
      <input type="text" className="form-control align-center w-full me-2"
      value={search} placeholder="Enter your search..."
      onChange={e => setSearch(e.target.value)}  />

      {
        search.length >= 2 &&
        <div className="position-absolute pt-2 px-1 w-100 rounded"
        style={{
          background: '#eee', zIndex: 10,
          maxHeight: 'calc(100vh - 100px)',
          overflow: 'auto'
        }}>
          {
            blogs.length
            ? blogs.map(blog => (
              <CardHoriz key={blog._id} blog={blog} />
            ))
            : <h3 className="text-center">No Blogs</h3>
          }
        </div>
      }
      </div>
    </div>
  )
}

export default Search
