import './footer.css'

function Footer () {
    return(
        <footer className='footer'>
            <div className='address'>
                <h2>Kontakt</h2>
                <p>Egestam Mattsson El & Data AB</p>
                <p>Ridspögatan 15a</p>
                <p>213 77 Malmö</p>
                <div className="contact">
                    <a href="tel:040-6170166">Tel:040-6170166</a>
                    <a href="mailto:info@emeldata.se"> E-POST: info@emeldata.se</a>
                </div>

                <p>Integritetspolicy</p>

            </div>
            <div className='links'>
                <div className="head1">
                    <h3>Meny</h3>
                </div>
                <div className="head2">
                    <h3>Din integritet</h3>
                </div>
                <div className="col1">
                    <p>Hem</p>
                    <p>Hållbarhet</p>
                    <p>Tjänter</p>
                    <p>Kontakta oss</p>
                    <p>Jobba med oss</p>
                </div>
                <div className="col12">
                <p>Integritetspolicy</p>
                <p>Cookiepolicy</p>
                <div className="facebook">
                    <img src="./assets/vector.png" alt="facebook logo" />
                    <span className='logoText'>Facebook</span>
                </div>
                </div>
            </div>
            <div className='about'>
                <h1>Gasellvinnare</h1>
                <img src="./assets/image2.png" alt="images" />
                <p>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
            </div>
            <img className='logo ' src="./assets/logo.png" alt="site logo" />
            <div className="copyright">
                <p>&copy; 2024 All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer