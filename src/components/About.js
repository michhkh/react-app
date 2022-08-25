import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/APIproject">APIproject</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </div>
  );
};
