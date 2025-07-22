import '../scss/about_me.scss'

const ABOUT_ME = ({ goToSlide }) => {
 
  return (
    <div className='about_wrap wrap'>

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
        <div className="about_box">
          <div className="about_img">
            <img src={process.env.PUBLIC_URL + '/img/me1.jpg'} alt="나1" />

            <div className="about_imgBox">
              <img src={process.env.PUBLIC_URL + '/img/me2.jpg'} alt="나2" />
              <img src={process.env.PUBLIC_URL + '/img/me3.jpg'} alt="나3" />
            </div>

          </div>

          <div className="about_fontBox">
            <div className="about_font1 about_font">
              <h4>Education</h4>

              <div className="about_font1Box">
                <img src={process.env.PUBLIC_URL + "/img/point.png"} alt="동그라미" />

                <div className="about_font1Box2">
                  <p>2025.07 <br />
                    MBC아카데미 컴퓨터교육센터 <br />
                    현장수요에 맞는 디지털디자인(웹디자인, 웹퍼블리셔) 전문가 양성 <span>(수료)</span></p>

                  <p>2024.02 <br />
                    순천향대학교 법학과 <span>(졸업)</span></p>

                  <p>2022.02 <br />
                    순천향대학교 법학과 <span>(편입)</span></p>

                  <p>2020.02 ~ 2022.02 <br />
                    용인예술과학대학교 법무경찰과 <span>(졸업)</span></p>
                </div>
              </div>
            </div>

            <div className="about_font2 about_font">
              <h4>Certificate</h4>
              <p><img src={process.env.PUBLIC_URL + "/img/card.png"} alt="자격증" /> 2024.06 한국사능력검정시험 1급 취득</p>

              <p><img src={process.env.PUBLIC_URL + "/img/card.png"} alt="자격증" /> 2020.07 1종보통운전면허 취득</p>
            </div>

            <div className="about_font3 about_font">
              <h4>Skills</h4>

              <div className="skillBox">
                <ul>
                  <li>
                    <img src={process.env.PUBLIC_URL + "/img/html.jpg"} alt="html" />
                    HTML5
                  </li>

                  <li>
                    <img src={process.env.PUBLIC_URL + "/img/css.jpg"} alt="css" />
                    CSS3
                  </li>

                  <li>
                    <img src={process.env.PUBLIC_URL + "/img/js.jpg"} alt="js" />
                    JS
                  </li>

                  <li>
                    <img src={process.env.PUBLIC_URL + "/img/jq.jpg"} alt="jq" />
                    Jquery
                  </li>

                  <li>
                    <img src={process.env.PUBLIC_URL + "/img/scss.jpg"} alt="scss" />
                    SCSS
                  </li>

                  <li>
                    <img src={process.env.PUBLIC_URL + "/img/react.jpg"} alt="react" />
                    REACT
                  </li>

                  <li>
                    <img src={process.env.PUBLIC_URL + "/img/ps.jpg"} alt="ps" />
                    Ps
                  </li>

                  <li>
                    <img src={process.env.PUBLIC_URL + "/img/figma.jpg"} alt="Figma" />
                    Figma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ABOUT_ME