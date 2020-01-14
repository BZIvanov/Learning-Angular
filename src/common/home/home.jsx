import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/extensions">VS code extensions</Link></li>
        <li><Link to="/utilities">Utilities</Link></li>
        <li><Link to="/css">Stylings</Link></li>
        <li><Link to="/nextjs">Next.JS</Link></li>
        <li><Link to="/git">Git</Link></li>
      </ul>
    </nav>
  )
}

export default Home;
