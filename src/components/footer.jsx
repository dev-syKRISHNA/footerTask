import './footer.css'

function Footer () {
    return(
        <footer className='footer'>
            <div className='address'>
                <div className="addrHead">
                    <h3>Kontakt</h3>
                </div>
                <div className="block1">
                    <p>Egestam Mattsson El & Data AB</p>
                    <p>Ridspögatan 15a</p>
                    <p>213 77 Malmö</p>                
                </div>
                <div className="contact">
                    <a href="tel:040-6170166">Tel: 040-6170166</a>
                    <a href="mailto:info@emeldata.se"> E-post: info@emeldata.se</a>
                </div>
                <div className="addrBlock">
                <p>Integritetspolicy</p>
                </div>

            </div>
            <div className='links'>
                <div className="col1">
                    <h3>Meny</h3>
                    <p>Hem</p>
                    <p>Hållbarhet</p>
                    <p>Tjänter</p>
                    <p>Kontakta oss</p>
                    <p>Jobba med oss</p>
                </div>
                <div className="col2">
                <h3>Din integritet</h3>
                <p>Integritetspolicy</p>
                <p>Cookiepolicy</p>
                <div className="facebook">
                    <img src="./assets/vector.png" alt="facebook logo" />
                    <span className='logoText'>Facebook</span>
                </div>
                </div>
            </div>
            <div className="links2">
            <div className="col3">
                    <h3>Meny</h3>
                    <p>Vårt erbjudande</p>
                    <p>Hållbarhet</p>
                    <p>Jobba hos oss</p>
                    <p>Om oss</p>
                    <p>Kontakta oss</p>
                </div>
                <div className="col2">
                <h3>Din integritet</h3>
                <p>Integritetspolicy</p>
                <p>Cookiepolicy</p>
                <div className="facebook">
                    <img src="./assets/vector.png" alt="facebook logo" />
                    <span className='logoText'>Facebook</span>
                </div>
                </div>
            </div>
            <div className='about'>
                <h3>Gasellvinnare</h3>
                <img src="./assets/image2.png" alt="images" />
                <p>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
            </div>
            <img className='logo ' src="./assets/logo.png" alt="site logo" />
            <div className="copyright">
                <p>Copyright &copy; 2024 All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer