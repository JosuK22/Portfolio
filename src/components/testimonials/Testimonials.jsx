import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Avatar Images
import Avr1 from '../../assets/Avatars/avatar_5.png';
import Avr2 from '../../assets/Avatars/avatar_2.png';
import Avr3 from '../../assets/Avatars/avatar_3.png';
import Avr4 from '../../assets/Avatars/avatar_4.png';
import Avr5 from '../../assets/Avatars/avatar_1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      avatar : Avr1,
      name: 'Joyal Thomas',
      test: 'As a developer and a problem solver, I think Joseph is a great collaborative partner to have. I met Joseph at college and we worked on several college projects together. He always has a professional attitude and has good communication and understanding capability which makes him a excellent colleague.',
    },
    {
      id: 2,
      avatar : Avr2,
      name: 'Dixon Davis',
      test: "It was a pleasure collaborating with Joseph on different projects. One of the things that I think is special about him is that he is always energetic.Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      avatar : Avr3,
      name: 'Neethu Maria',
      
      test: 'I worked with Joseph in the same team, he is very creative problem solver. One of the best thing i like about him is he is always ready to help when we are stuck. He is a good team player and one of the best colleague i had.',
    },
    {
      id: 4,
      avatar : Avr4,
      name: 'Tom Joby',
      
      test: "I can say that he is one of those people that you love to work with. When it comes to professional skills, he is really committed to work, always doing his best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,
      avatar : Avr5,
      name: 'Saranya Ramakrishnan',
      test: "Joseph is someone who anyone will love to wok with. Always helping out, communicating and actively collaburating while working as a team is what everyone expect from each members in a team and he got all these qualities.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination, Autoplay]} // Import Autoplay
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Add autoplay with a delay of 3000 milliseconds (3 seconds)
        loop={true}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <img src={test.avatar} alt="avatar" />
            </div>
            <h5 className='client__name'>{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
