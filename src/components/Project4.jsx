import "../scss/project.scss"
import { Button } from 'react-bootstrap'

const Project4 = () => {
    const openSite = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="project_slideBox">
            <img src={process.env.PUBLIC_URL + "/img/project4.jpg"} alt="프로젝트" />

            <div className="project_skillBox">
                <div className="project_skill">
                    <p>#HTML</p>
                </div>

                <div className="project_skill">
                    <p>#JS</p>
                </div>

                <div className="project_skill">
                    <p>#Jquery</p>
                </div>

                <div className="project_skill">
                    <p>#CSS</p>
                </div>
            </div>

            <div className="project_fontBox">
                <h4>반응형 프로젝트 - RIIZE & BRIIZE</h4>
                <h5>개인 프로젝트</h5>
                <p>
                    RIIZE와 팬덤 BRIIZE를 위한 사이트입니다.
                    반응형 웹으로 제작되어 다양한 기기에서 사용 가능하며,
                    <br />
                    JavaScript 객체를 기반으로 프로필 테이블을 동적으로 렌더링하였습니다.
                </p>
            </div>

            <div className="project_btnBox">
                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/2_second/')}
                >
                    <i className="fi fi-rs-computer computer"></i>
                    <p>View site</p>
                </Button>

                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/2_second/RIIZE&BRIIZE.pdf')}
                >
                    <i className="fi fi-rs-document document"></i>
                    <p>View Docs</p>
                </Button>
            </div>
        </div>
    )
}

export default Project4