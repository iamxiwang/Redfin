import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='foot-section'>
            <p>Copyright: © 2023 Greenfin. All rights reserved.</p>
            <div className='github-linkedin'>
            <Link to={{pathname: 'https://github.com/iamxiwang'}} className='github-tag' target="_blank" >
            <i className="fa-brands fa-github"></i>
            </Link>
            <Link to={{pathname: 'https://www.linkedin.com/in/xi-vivian-wang-7b00bb25a/'}} className='github-tag' target="_blank" >
            <i className="fa-brands fa-linkedin"></i>
            </Link>
            </div>
        </div>
    )
}

export default Footer