import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <h1>Welcome to My Website</h1>
        <Link to="/articles" className="primary-btnClass">Go to Article</Link>
      </div>
    </section>
  );
}

export default Home;
