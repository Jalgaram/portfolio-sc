import '../scss/intro.scss'

const Intro = ({ goToSlide }) => {

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
            <p>배우고, 만들며 끊임없이 도전중인 <br />웹퍼블리셔와 프론트엔드 개발자를 꿈꾸는 김가람입니다.</p>
          </div>

          <div className="intro_title3">
            <p>Continuously learning, building, and taking on new challenges. <br />I'm Garam Kim, aspiring to become a web publisher and frontend developer.</p>
          </div>
        </div>

        <div className="scrollBox">
          <p>SCROLL DOWN</p>
          <i className="fi fi-rs-angle-double-small-down scroll"></i>
        </div>

      </div>
    </div>
  )
}

export default Intro