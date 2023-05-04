import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { RootStore } from '../utils/Type';
import CardVert from '../components/cards/CardVert';
import Loading from '../components/alert/Loading';



const Home = () => {
  const {homeBlogs} = useSelector((state: RootStore) => state)

  if(homeBlogs.length === 0) return <Loading />;
  if (homeBlogs.length === 0) {
    return <Loading />;
  }
  

  return (
    <div className='home_page'>
      {
        homeBlogs.map(homeBlog => (
          <div key={homeBlog._id} >
            {
              homeBlog.count > 0 &&
              <>
              <h3>
                <Link to={`/projects/${(homeBlog.name).toLowerCase()}`}>
                  {homeBlog.name} <small>{homeBlog.count}</small>
                </Link>
              </h3>
              <hr className='mt-1' />

              <div className='home_blogs'>
                {
                  homeBlog.blogs.map(blog => (
                    <CardVert key={blog._id} blog={blog} />
                  ))
                }

              </div>
              </>
            }
            {
              homeBlog.count > 4 && 
              <Link className='text-right d-block my-2 mb-3'
              to={`/projects/${homeBlog.name}`}>
                Read more &gt;&gt;
              </Link>
            }
          </div>
          
        ))
      }
    </div>
    
  )
}

export default Home