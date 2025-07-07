import React from 'react'
import '../scss/intro.scss'

const Intro = ({goToSlide}) => {
  
  return (
    <div className='intro_wrap wrap'>

      <div className="header">
        <p>본페이지는 1920*1080 기준으로 제작되었습니다.</p>

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

        <div className="intro_titleBox">
          <div className="intro_title1">
            <p>2025</p>
            <h2>GARAM</h2>
            <h4>PORTFOLIO</h4>
          </div>

          <div className="intro_title2">
            <p>배우고, 만들며 끝없이 도전 중인 <br />미래의 프론트엔드 개발자 김가람입니다.</p>
          </div>

          <div className="intro_title3">
            <p>Learning, building, and constantly challenging myself <br />- I'm Garam Kim, a future frontend developer.</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Intro