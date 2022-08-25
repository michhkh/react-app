import { Link } from "react-router-dom";
import {
  StyledButton,
  StyledHeadline,
  StyledParagraph,
} from "./StyledComponents";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/APIproject">APIproject</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <StyledHeadline>Hello there</StyledHeadline>
      <StyledParagraph>Press the button for a test</StyledParagraph>
      <StyledButton>Click me if you can</StyledButton>
    </div>
  );
};

export default Home;
