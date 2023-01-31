import React from 'react';
import Title from './Title';
import '../style/components/About.css'
import profile_photo from '../images/portfolio.png';

class About extends React.Component {
  render() {
    return (
    <section className='about-content'>
      <section className="about-text">
        <Title heading="About Me" />
        <div className='about-me-text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatum in ullam iusto debitis doloremque reiciendis, perferendis, quod sapiente aliquam architecto magnam cupiditate omnis fugiat ad numquam vel? Omnis, perspiciatis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, beatae doloribus quod ut quasi quas odio sequi. Tempora minus neque ipsum fugit mollitia, architecto numquam quod et aliquam, earum fugiat?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, cumque quidem eos ab accusantium saepe doloremque, maxime repellendus cupiditate consectetur, minima suscipit molestiae quos illum quam. Id perferendis doloremque voluptatem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium aliquid, autem repudiandae incidunt rem quidem delectus fugiat facere molestiae iste ratione saepe optio vel nihil odit, totam obcaecati minima eligendi!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum inventore labore, esse reprehenderit odit architecto necessitatibus non sapiente? Omnis provident ipsam ad corrupti doloribus ducimus laudantium itaque sed placeat laborum?
          </p>
        </div>
      </section>
      <section className='my-photo'>
        <div className='photo-border'>
          <img src={profile_photo} alt="my-profile-pic" />
        </div>        
      </section>
    </section>);
  }
}

export default About;
