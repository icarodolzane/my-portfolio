import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
    <body>
      <Header />
      <Home />
    </body>);
  }
}

export default App;
