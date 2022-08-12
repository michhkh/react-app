import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import ImportantContent from "./components/ImportantContent";
import {
  StyledButton,
  StyledHeadline,
  StyledParagraph,
} from "./components/StyledComponents";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello there</h1>
      </header>
      <StyledHeadline>This is a headline</StyledHeadline>
      <StyledParagraph>My paragraph</StyledParagraph>
      <StyledButton>Click me</StyledButton>
      <Button />
      <ImportantContent />
      <Footer />
    </div>
  );
}

export default App;
