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
            <TaskB name='Ala' />
          </Route>
          <Route path="/taskC">
            <MyForm />
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

function TaskB(props) {
  return <h1>Cześć, {props.name}</h1>;
}

function TaskC() {
  return (
    <form>
      <input type="submit" value="Wyślij" />
    </form>
  );
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      number: null,
      email: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
      alert("Not valid email");
    }
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <p>Tekst {this.state.text}</p>
        <p>Liczba {this.state.number}</p>
        <p>Email {this.state.email}</p>
        <p>Wpisz tekst:</p>
        <input
          type='text'
          name='text'
          onChange={this.myChangeHandler}
        />
        <p>Wpisz liczbę:</p>
        <input
          type='number'
          name='number'
          onChange={this.myChangeHandler}
        />
        <p>Wpisz email:</p>
        <input
          type='email'
          name='email'
          onChange={this.myChangeHandler}
        />
        <br />
        <br />
        <input type='submit' />
      </form >
    );
  }
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
