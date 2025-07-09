import './App.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Intro from './components/Intro';
import ABOUT_ME from './components/ABOUT_ME';
import Project from './components/Project';
import Contact from './components/Contact';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';
import { useRef } from 'react';

function App() {
  const swiperRef = useRef();

  const updateActiveClass = (activeIndex) => {
    document.querySelectorAll('.app_slide').forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  };

  return (
    <div className="App">

      <Swiper
        direction={'vertical'}
        ref={swiperRef}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar, Mousewheel]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateActiveClass(swiper.activeIndex);
          
          swiper.on('slideChangeTransitionEnd', () => {
            updateActiveClass(swiper.activeIndex);
          });
        }}
        className="mySwiper"
      >
        <SwiperSlide className='app_slide'><Intro goToSlide={(i) => swiperRef.current?.slideTo(i)} /></SwiperSlide>

        <SwiperSlide className='app_slide'><ABOUT_ME goToSlide={(i) => swiperRef.current?.slideTo(i)}/></SwiperSlide>

        <SwiperSlide className='app_slide'><Project goToSlide={(i) => swiperRef.current?.slideTo(i)}/></SwiperSlide>

        <SwiperSlide className='app_slide'><Contact goToSlide={(i) => swiperRef.current?.slideTo(i)}/></SwiperSlide>

      </Swiper>

    </div>
  );
}

export default App;
