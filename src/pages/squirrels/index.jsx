import React from "react";
import { Route, Link } from "react-router-dom";
import { BrownSquirrel, BlackSquirrel } from "./subRoutes";

export const Squirrels = ({ match }) => (
  <section>
    <h1>Squirrels are the best!</h1>
    <Link to={`${match.url}/brown`}>Brown Squirrels</Link>
    <Link to={`${match.url}/black`}>Black Squirrels</Link>
    <Route path={`${match.path}/brown`} component={BrownSquirrel} />
    <Route path={`${match.path}/black`} component={BlackSquirrel} />
  </section>
);
