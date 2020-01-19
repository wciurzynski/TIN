import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/taskA">TaskA</Link>
            </li>
            <li>
              <Link to="/taskB">TaskB</Link>
            </li>
            <li>
              <Link to="/taskC">TaskC</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/taskA">
            <TaskA property='test' />
          </Route>
          <Route path="/taskB">
            <TaskB />
          </Route>
          <Route path="/taskC">
            <TaskC />
          </Route>
          <Route path="/">
            <TaskA property='test' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function TaskA({ property }) {
  return (
    <div>
      <a name="etykieta">Etykieta: {property}</a>
    </div>
  );
}

function TaskB() {
  return <h2>TaskB</h2>;
}

function TaskC() {
  return <h2>TaskC</h2>;
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
