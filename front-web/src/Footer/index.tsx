import './styles.css';
import { ReactComponent as YouTube } from './youtube.svg'
import { ReactComponent as LinkedIn } from './linkedin.svg'
import { ReactComponent as Instagram } from './instagram.svg'

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="www.youtube.com.br" target="_new">
          <YouTube />
        </a>
        <a href="www.linkedin.com.br" target="_new">
          <LinkedIn />
        </a>
        <a href="www.instagram.com.br" target="_new">
          <Instagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer;