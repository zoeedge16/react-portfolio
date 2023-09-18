import GitHub from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import Stack from '../assets/stackoverflow.png'

function Footer() {
    return (
       <div className='footer'>
        <a href="https://github.com/zoeedge16"><img src={GitHub} alt="github" /></a>
        <a href="https://www.linkedin.com/in/zoe-edge-99982a98/"><img src={LinkedIn} alt="linkedin" /></a>
        <a href="https://stackoverflow.com/users/22588716/zoe-edge"><img src={Stack} alt="stackoverflow" /></a>
       </div>
    )
}

export default Footer;