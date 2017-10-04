import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
// import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
// import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
