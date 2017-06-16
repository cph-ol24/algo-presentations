import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import StackQueuesBagPresentations from "./stacks-queues-bag";
import MergesortPresentation from "./mergesort/presentation";
import QuicksortPresentation from "./quicksort/presentation";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              background: "#CCC",
              height: 50,
              display: "flex",
              alignItems: "center",
              fontSize: 14
            }}
            className="navigator"
          >
            <Link to="/stacks" style={{ marginLeft: 10 }}>
              Recursion and binary search
            </Link>

            <div style={{ marginLeft: 10 }}>|</div>

            <Link to="/stacks" style={{ marginLeft: 10 }}>
              Stacks, Queues and bags
            </Link>

            <div style={{ marginLeft: 10 }}>|</div>

            <Link to="/mergesort" style={{ marginLeft: 10 }}>
              Mergesort
            </Link>

            <div style={{ marginLeft: 10 }}>|</div>

            <Link to="/quicksort" style={{ marginLeft: 10 }}>
              Quicksort
            </Link>
          </div>

          <Route
            exact
            path="/"
            component={() => <div>Vælg emne i bunden</div>}
          />
          <Route path="/stacks" component={StackQueuesBagPresentations} />
          <Route path="/mergesort" component={MergesortPresentation} />
          <Route path="/quicksort" component={QuicksortPresentation} />
        </div>
      </Router>
    );
  }
}

export default App;
