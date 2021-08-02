import Home from "./component/Home";
import WatchTrailer from "./component/WatchTrailer";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import { Button } from "bootstrap";


const App = () => {
  const [filmSelection, setFilmSelection] = useState({});
  return (
    <>
      <Redirect to="/">
        <button style={{ width: "50px" }}> Home </button>
        
      </Redirect>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home setFilmSelection={setFilmSelection} />}
        />
        <Route
          path="/watchtrailer"
          render={() => (
            <WatchTrailer
              title={filmSelection.title}
              description={filmSelection.description}
              trailer={filmSelection.trailer}
            />
          )}
        />
      </Switch>
    </>
  );
};
export default App;

