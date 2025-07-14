import "../scss/project.scss"
import { Button } from 'react-bootstrap'

const Project1 = () => {
    const openSite = (url) => {
        window.open(url, '_blank');
    }

    return (
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
                <h5>팀 프로젝트 <span>2025.06.23 ~ 2025.06.30</span></h5>
                <p>
                    전기차 충전과 주차 정산을 한 번에 해결하고 싶은 사람들을 위한 주차장 관리 시스템 사이트입니다.
                    <br />
                    4인 팀 프로젝트이며, 제가 맡은 부분은 <span>[메인 - 실시간 주차 현황]</span> 과 <span>[서브 - 이용내역]</span>입니다.
                </p>
            </div>

            <div className="project_btnBox">
                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/parket/')}
                >
                    <i className="fi fi-rs-computer computer"></i>
                    <p>View Site</p>
                </Button>

                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/parket/Parket.pdf')}
                >
                    <i className="fi fi-rs-document document"></i>
                    <p>View Docs</p>
                </Button>
            </div>
        </div>
    )
}

export default Project1