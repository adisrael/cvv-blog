import React, { Component } from 'react';
import Home from './views/home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      lang: "EN",
      // lang_options: ["EN", "ES"],
    }
  }

  componentDidMount() {
    // let selector = document.getElementById("select-lang");
    // let lang = selector.options[selector.selectedIndex].value;
    // this.setState({
    //   lang,
    // })
  }

  shouldComponentUpdate(nextState) {
    // let selector = document.getElementById("select-lang");
    // let lang = selector.options[selector.selectedIndex].value;
    // if (lang !== this.state.lang) {
    //   return true;
    // }
    // else {
    //   return false;
    // }
  }

  onChange() {
    // let selector = document.getElementById("select-lang");
    // let lang = selector.options[selector.selectedIndex].value;
    // this.setState({
    //   lang,
    // })
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* <select id="select-lang" onChange={this.onChange}>
            {this.state.lang_options.map((lang, id) => (
              <option value={lang} key={id}>{lang}</option>
            ))}
          </select> */}
          <Switch>
            <Route exact path="/">
              <Home lang={this.state.lang}/>
            </Route>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route> */}
            <Route exact path=".well-known/acme-challenge/LBuOQ1fqmhtF81U8cdvjt25vO9uknWhRAFv1bEdOisI">
              <Certbot />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Certbot() {
  return (
    "LBuOQ1fqmhtF81U8cdvjt25vO9uknWhRAFv1bEdOisI.4f8cJWG471h_xzaArV9sMiuAfqw7Zy6QriFRDH5uXOM"
  );
}

export default App;
