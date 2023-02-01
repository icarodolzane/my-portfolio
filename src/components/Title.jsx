import React from 'react';
import '../style/components/Title.css';
import me_avatar from '../images/me_avatar.png';

class Title extends React.Component {
  render() {
    const { heading } = this.props;
    return (
    <div className='title'>
      <h2>{ heading }</h2>
      <div className='single-line'/>
      <img alt='avatar' src={me_avatar}/>
    </div>);
  }
}

export default Title;
