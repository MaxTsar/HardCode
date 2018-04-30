import React, { Component } from 'react'
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
import './styles/main.scss'

class App extends Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <Toolbar />
        </header>
        <section>
          {this.props.children}
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;
