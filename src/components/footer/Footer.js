import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import pagamento from '../../Imagem/pagamento.png'




function Footer() {
    return(
     <FooterContainer  className="main-footer">
        <div className="footer-middle">
         <div className="container">
             <div className="row">
                 {/*Coluna1 */}
                  <div className="col-md-3 col-sm-6">
                      <h5>Sobre FullStack ELETRO</h5>
                      <ul className="list-unstyled">
                          <li><a href="/">Nossa historia</a></li>
                          <li>Faça parte você também!</li>
                      </ul>
                  </div>
                   {/*Coluna2 */}
                   <div className="col-md-3 col-sm-6">
                      <h4>Trabalhe Conosco</h4>
                      <ul className="list-unstyled">
                          <li>Envie seu curriculo:</li>
                          <li>fullstackeletro@gmail.com</li>
                      </ul>
                  </div>
                   {/*Coluna3 */}
                   <div className="col-md-3 col-sm-6">
                      <h4>Nos Siga:</h4>
                      <ul className="list-unstyled">
                          <li><a href="/">Facebook</a></li>
                          <li><a href="/">Instagram</a></li>
                      </ul>
                  </div>
                   {/*Coluna4 */}
                   <div className="col-md-3 col-sm-6">
                      <h4>Formas de Pagamento</h4>
                      <ul className="list-unstyled">
                          <li>Dinheiro</li>
                          <li>Cartão 24x Sem Juros</li>
                          <img src={pagamento } />
                      </ul>
                      
                  </div>
             </div>
             {/*Autoria*/}
             <div className="footer-bottom">
                 <p className="text-xs-center">
                     &copy;{new Date().getFullYear()} Fullstack ELETRO - Todos os Direitos Reservados
                 </p>
             </div>
         </div>
       </div>
     </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
   .footer-middle{
       background: var(--mainDark);
       padding-top: 3rem;
       color: var(--mainWhite);
   }
   .footer-bottom{
       padding-top: 3rem;
       padding-bottom: 2rem;
   }
`;