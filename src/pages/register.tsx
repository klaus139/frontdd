import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="auth_page">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Register</h3>

        <RegisterForm />

        <p className="mt-2">
          {`Already have an account? `}
          <Link
            to={`/login`}
            style={{ color: 'crimson' }}
            onClick={(event) => {
              event.preventDefault();
              navigate(`/login${location.search}`);
            }}
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;