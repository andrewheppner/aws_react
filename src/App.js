import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Dogs, Squirrels, Home } from "./pages";
import Styled from "styled-components";

const StyledLink = Styled(Link).attrs({
  className: "white ttu f3"
})`
  text-decoration: none;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="pa3 flex justify-around items-center bg-light-red">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/dogs">Dogs</StyledLink>
            <StyledLink to="/squirrels">Squirrels</StyledLink>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/dogs" component={Dogs} />
          <Route path="/squirrels" component={Squirrels} />
        </div>
      </Router>
    );
  }
}

export default App;
