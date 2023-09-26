import './style.css'

import imgLogo from '../../assets/img/logo1.png'
function Header(){
    return(
        <header>
            <div className='headerContent'>
                <img src={imgLogo} alt="" />
                <div className='nav-div'>
                    <nav>
                        <ul>
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>Eventos</li></a>
                            <a href="#"><li>Contatos</li></a>
                        </ul>
                    </nav>
                    <a href="#" className='button'>Logar</a>
                </div>
            </div>
        </header>
    )
}

export default Header;