import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
};

export default Home;
