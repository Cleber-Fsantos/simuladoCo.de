import './style.css'

import imgLogo2 from '../../assets/img/logo2.png'

function Home(){
    return(
        <main id='mainHome'>
            <h1>pagina home Event+</h1>
            <section className='banner'>
                <div className="bannerContent">
                    <img src={imgLogo2} alt="logotipo 2" />
                    <hr />
                    <p>
                        Área de eventos da Escola de Informática
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home;