import React from 'react';
import { Link } from 'react-router-dom';
import { IBlog } from '../../utils/Type';
import './cradvert.css'
interface IProps {
  blog: IBlog;
}

const CardVert: React.FC<IProps> = ({ blog }) => {
  return (
    <div className="card">
     

      <div className="card-body">
        <h5 className="card-title">
          <Link
            to={`/blog/${blog._id}`}
            style={{ textDecoration: 'none', textTransform: 'capitalize' }}
          >
            {blog.title.slice(0, 50) + '...'}
          </Link>
        </h5>
        <p className="card-text">{blog.description.slice(0, 100) + '...'}</p>
        <p>Read More...</p>

        <p className="card-text d-flex justify-content-between">
          <small className="text-muted text-capitalize">
            {
            typeof (blog.user) !== 'string' && 
              <Link
                to={`#`}
                style={{ textDecoration: 'none', textTransform: 'capitalize' }}
              >
                <span style={{font:"menu"}}>By: {blog.user.name}</span>
              </Link>
            }
          </small>
          <small className='text-muted'>
            <span style={{font:"initial"}}>Aritcle type</span> {blog.type}
          </small>

          <small className='text-muted'>
            <span style={{font: 'initial'}}>{blog.pages} pages</span>
          </small>

          <small className="text-muted">
           <span style={{font: "initial"}}>{new Date(blog.createdAt).toLocaleString()}</span> 
          </small>
        </p>
      </div>
    </div>
  );
};

export default CardVert;
