import "../scss/project.scss"
import { Button } from 'react-bootstrap'

const Project5 = () => {
    const openSite = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="project_slideBox">
            <img src={process.env.PUBLIC_URL + "/img/project5.jpg"} alt="프로젝트" />

            <div className="project_skillBox">
                <div className="project_skill">
                    <p>#HTML</p>
                </div>

                <div className="project_skill">
                    <p>#Jquery</p>
                </div>

                <div className="project_skill">
                    <p>#CSS</p>
                </div>
            </div>

            <div className="project_fontBox">
                <h4>웹표준 프로젝트 - 모여봐요 잡화상점</h4>
                <h5>개인 프로젝트</h5>
                <p>
                    첫 번째 프로젝트로, 옛날 상점을 컨셉으로 한 문구/잡화 쇼핑몰 사이트입니다.
                    <br />
                    기본적인 웹사이트 구조를 직접 구현하며 웹 제작의 기초를 익혔습니다.
                </p>
            </div>

            <div className="project_btnBox">
                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/1/')}
                >
                    <i className="fi fi-rs-computer computer"></i>
                    <p>View Site</p>
                </Button>

                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/1/모여봐요잡화상점.pdf')}
                >
                    <i className="fi fi-rs-document document"></i>
                    <p>View Docs</p>
                </Button>
            </div>
        </div>
    )
}

export default Project5