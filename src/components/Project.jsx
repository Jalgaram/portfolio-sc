import "../scss/project.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Project1 from './Project1'
import Project2 from "./Project2"
import Project3 from "./Project3"
import Project4 from "./Project4"
import Project5 from "./Project5"

const Project = ({ goToSlide }) => {
  return (
    <div className='project_wrap wrap'>
      <div className="header">
        <div className="menu">
          <ul>
            <li onClick={() => goToSlide(0)}>INTRO</li>
            <li onClick={() => goToSlide(1)}>ABOUT ME</li>
            <li onClick={() => goToSlide(2)}>PROJECT</li>
            <li onClick={() => goToSlide(3)}>CONTACT</li>
          </ul>
        </div>
      </div>

      <div className="box">
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper project_swiper"
        >
          <SwiperSlide className='project_slide'><Project1 /></SwiperSlide>

          <SwiperSlide className='project_slide'><Project2 /></SwiperSlide>
          <SwiperSlide className='project_slide'><Project3 /></SwiperSlide>
          <SwiperSlide className='project_slide'><Project4 /></SwiperSlide>
          <SwiperSlide className='project_slide'><Project5 /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Project