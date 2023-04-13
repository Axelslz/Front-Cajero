import banco from '../assets/Img/banco.jpg'
import '../assets/Styles/Footer.css'

function Footer(){

    return(

        <footer className="footer-distributed">

            <div className="footer-left">
           
             <img src={banco} alt="Logo"  width="50" height="44" className="logo"/>
        
                <p className="footer-links">
                
                  <a href="#">Términos y condiciones</a>

                </p>
        
             <p className="footer-company-name">Copyright © 2023 <strong>Money Street</strong> Todos los derechos reservados</p>
            </div>
        
         <div className="footer-center">
            <div>
                <p><span></span>
                    Money Street
                </p>
              <br></br>
            </div>
        
            <div>
                <br></br>
                <p>+52 961-190-71-83</p>
            </div>

            <div>
              <br></br>
                <p><a href="@gmail.com">MoneyStreet@gmail.com</a></p>
            </div>



        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>Acerca de la compañia</span>
                <strong>Money Street</strong> Somos una solucion para evitar colas en los cajero automaticos.</p>
          
        </div>
        </footer>
        
        
            
    )
}

export default Footer;