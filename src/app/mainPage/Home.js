import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>React App</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/APIproject">APIproject</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/StylesTest">StylesTest</Link>
        <Link to="/contextCounter">ContextCounter</Link>
        <Link to="/contextCount">ContextCount</Link>
      </nav>
    </div>
  );
};

export default Home;
