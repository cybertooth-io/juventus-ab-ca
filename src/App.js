import React, { Component } from 'react';
import './styles/css/index.css';

class App extends Component {
  render() {
    return (
        <div>
          <section>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <a className="navbar-brand" href="#">juventus-ab-ca</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              </div>
            </nav>
          </section>
          <section>
            <div className="container">
              <h1>Welcome</h1>
            </div>
          </section>
        </div>
    );
  }
}

export default App;
