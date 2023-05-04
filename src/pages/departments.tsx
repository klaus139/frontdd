import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useLocation, useNavigate} from 'react-router-dom';
import { getAPI } from '../utils/FetchData';
import { IBlog, RootStore } from '../utils/Type';
import CardHoriz from '../components/cards/CardHoriz';

interface IProps {
  blog: IBlog,
  setBlog: (blog: IBlog) => void
}

const Departments: React.FC<IProps> = () => {
  const { categories } = useSelector((state: RootStore) => state);
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const { categoryId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const res = await getAPI(`projects/category/${categoryId}`)
            setBlogs(res.data)
            console.log(res)
          } catch (err) {
            console.log(err)
          }
    };
    fetchBlogs();
  }, [categoryId]);

  useEffect(() => {
    setBlogs([])
  },[pathname])

  const handleClick = (categoryId: string) => {
    setBlogs([]);
    navigate(`projects/category/${categoryId}`);
  };

  return (
    <div>
      <h2>Departments:</h2>
      <ul>
        {categories.map(category => (
          <li key={category._id} onClick={() => handleClick(category._id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Departments;
