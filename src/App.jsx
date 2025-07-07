import './App.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Intro from './components/Intro';
import About_me from './components/About_me';
import Project from './components/Project';
import Contact from './components/Contact';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';
import { useRef } from 'react';

function App() {
  const swiperRef = useRef();

  return (
    <div className="App">

      <Swiper
        direction={'vertical'}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar, Mousewheel]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mySwiper"
      >
        <SwiperSlide><Intro goToSlide={(i) => swiperRef.current?.slideTo(i)} /></SwiperSlide>

        <SwiperSlide><About_me goToSlide={(i) => swiperRef.current?.slideTo(i)}/></SwiperSlide>

        <SwiperSlide><Project goToSlide={(i) => swiperRef.current?.slideTo(i)}/></SwiperSlide>

        <SwiperSlide><Contact goToSlide={(i) => swiperRef.current?.slideTo(i)}/></SwiperSlide>

      </Swiper>

    </div>
  );
}

export default App;
