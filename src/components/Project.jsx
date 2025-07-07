import React from 'react'
import "../scss/project.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

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
          <SwiperSlide className='project_slide'>
            <div className="project_slideBox">
              <img src={process.env.PUBLIC_URL + "/img/project1.jpg"} alt="프로젝트" />

              <div className="project_skillBox">
                <div className="project_skill">
                  <p>#Team-Project</p>  
                </div>

                <div className="project_skill">
                  <p>#React.js</p>
                </div>

                <div className="project_skill">
                  <p>#BootStrap</p>
                </div>

                <div className="project_skill">
                  <p>#Swiper</p>
                </div>

                <div className="project_skill">
                  <p>#SCSS</p>
                </div>
              </div>

              <div className="project_fontBox">
                <h4>주차장 관리 시스템 사이트 - PARKET</h4>
                <h5>팀 프로젝트</h5>
                <p>
                  전기차 충전과 주차 정산을 한 번에 해결하고 싶은 사람들을 위한 주차장 관리 시스템 사이트입니다.
                  <br /> 
                  팀 프로젝트이며 4명이 제작한 사이트입니다.
                  <br />
                  제가 맡은 부분은 <span>[메인 - 실시간 주차 현황]</span> 과 <span>[서브 - 이용내역]</span>입니다.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='project_slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='project_slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='project_slide'>Slide 4</SwiperSlide>
          <SwiperSlide className='project_slide'>Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Project