import React from 'react';
import About from '../components/About';
import HelloMe from '../components/HelloMe';
import '../style/pages/Home.css';

class Home extends React.Component {
  render() {
    return (
    <main className="container">
      <HelloMe />
      <About/>
    </main>   
    
    );
  }
}

export default Home;
