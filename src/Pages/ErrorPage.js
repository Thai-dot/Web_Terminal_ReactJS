import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <div className="container text-center p-5 mt-5 ">
        <h1 className="text-danger fw-bold mt-5">Error Page</h1>
        <h4 className="text-danger fst-italic mt-3">Are you lost?</h4>
        <button type="button" class="btn btn-primary mt-3">
          <Link to="/home" className="text-white">
            Go to Home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ErrorPage