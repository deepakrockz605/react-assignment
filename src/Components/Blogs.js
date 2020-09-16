import React from "react";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <section className="blogs home">
        <div className="overlay"></div>
      <div className="container">
        <div className="blogs-wrapper">
        <h1>Blogs</h1>
        <Link to="/articles" className="primary-btnClass">Go to Article</Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
