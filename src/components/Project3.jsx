import "../scss/project.scss"
import { Button } from 'react-bootstrap'

const Project3 = () => {
    const openSite = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="project_slideBox">
            <img src={process.env.PUBLIC_URL + "/img/project3.jpg"} alt="프로젝트" />

            <div className="project_skillBox">
                <div className="project_skill">
                    <p>#HTML</p>
                </div>
                
                <div className="project_skill">
                    <p>#AJAX</p>
                </div>

                <div className="project_skill">
                    <p>#JS · jQuery</p>
                </div>

                <div className="project_skill">
                    <p>#Swiper</p>
                </div>

                <div className="project_skill">
                    <p>#SCSS</p>
                </div>
            </div>

            <div className="project_fontBox">
                <h4>Open API를 활용한 도서 웹사이트 - INDIEPUB</h4>
                <h5>개인 프로젝트 <span>2025.05.01 ~ 2025.05.28</span></h5>
                <p>
                    INDIEPUB 사이트의 레이아웃을 바탕으로 <span>카카오 Open API</span>를 통해 도서 정보를 가져와 구현하였으며, 
                    <br />
                    디자인과 효과를 최대한 유사하게 제작하였습니다.
                </p>
            </div>

            <div className="project_btnBox">
                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/3_project/')}
                >
                    <i className="fi fi-rs-computer computer"></i>
                    <p>View Site</p>
                </Button>

                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/3_project/INDIEPUB.pdf')}
                >
                    <i className="fi fi-rs-document document"></i>
                    <p>View Docs</p>
                </Button>
            </div>
        </div>
    )
}

export default Project3