import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <h1 className="text-danger">404 Not Found</h1>
          <div className="text-center">
            <button className="btn btn-danger m-auto text-center">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                GO TO HOME PAGE
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
