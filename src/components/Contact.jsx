import "../scss/contact.scss"

const Contact = ({ goToSlide }) => {
  const openSite = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className='contact_wrap wrap'>

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

        <div className="contact_box">
          <div className="contact_fontbox1">
            <p>
              <span>Thank you for watching.</span>
              <br />
              제 포트폴리오를 끝까지 봐주셔서 감사합니다.
            </p>

            <p>계속 배우고, 부딪히며 성장하겠습니다.</p>
          </div>

          <hr />

          <div className="contact_fontbox2">
            <img src={process.env.PUBLIC_URL + "/img/ME.jpg"} alt="반명함" />

            <div className="contact_font">

              <div className="contact_font1">
                <i className="fi fi-rs-user contact_icon"></i>
                <p> 김가람 (金佳攬, GaRam-Kim)</p>
              </div>

              <div className="contact_font1">
                <i className="fi fi-rs-envelope contact_icon"></i>
                <p>kgr424@naver.com</p>
              </div>

              <div className="contact_font1">
                <i className="fi fi-brands-github contact_icon"></i>
                <p className='git' 
                onClick={() => openSite('https://github.com/Jalgaram')}>github.com/Jalgaram</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact