import React from "react";
import happyFace from "../media/happy-face.png";

const Nav = () => {
  return (
    <div className="p-0">
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/home">
            Thai-Dot♥
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link active fw-bold icon"
                aria-current="page"
                href="/home"
              >
                Home
              </a>
              <a className="nav-link active fw-bold icon" href="/aboutme">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
