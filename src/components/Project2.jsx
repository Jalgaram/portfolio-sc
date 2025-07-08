import "../scss/project.scss"
import { Button } from 'react-bootstrap'

const Project2 = () => {
    const openSite = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className="project_slideBox">
            <img src={process.env.PUBLIC_URL + "/img/project2.jpg"} alt="프로젝트" />

            <div className="project_skillBox">
                <div className="project_skill">
                    <p>#React.js</p>
                </div>

                <div className="project_skill">
                    <p>#Redux</p>
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
                <h4>React 프로젝트 - Apple Store</h4>
                <h5>개인 프로젝트</h5>
                <p>
                    React를 사용하여 제작한 Apple Store 사이트입니다.
                    <br />
                    공식 사이트의 상품 이미지들을 활용하였으며, 기존 사이트와 다르게 리디자인 하여 구현하였습니다.
                </p>
            </div>

            <div className="project_btnBox">
                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/applestore/')}
                >
                    <i className="fi fi-rs-computer computer"></i>
                    <p>View site</p>
                </Button>

                <Button
                    variant="link"
                    className='project_btn'
                    onClick={() => openSite('https://jalgaram.github.io/applestore/AppleStore.pdf')}
                >
                    <i className="fi fi-rs-document document"></i>
                    <p>View Docs</p>
                </Button>
            </div>
        </div>
    )
}

export default Project2