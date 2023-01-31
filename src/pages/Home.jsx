import React from 'react';
import HelloMe from '../components/HelloMe';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import '../style/pages/Home.css';

class Home extends React.Component {
  render() {
    return (
    <main className="container">
      <LeftSideBar />
      <HelloMe />
      <RightSideBar/>
    </main>   
    
    );
  }
}

export default Home;
