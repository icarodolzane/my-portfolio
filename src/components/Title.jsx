import React from 'react';
import '../style/components/Title.css';

class Title extends React.Component {
  render() {
    const { heading } = this.props;
    return (
    <div className='title'>
      <h2>{ heading }</h2>
      <div className='single-line'/>
    </div>);
  }
}

export default Title;
