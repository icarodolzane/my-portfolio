import React from 'react';
import './App.css';
import Header from './components/Header';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
    <body>
      <Header />
      <RightSideBar />
      <LeftSideBar />
      <Home />
    </body>);
  }
}

export default App;
