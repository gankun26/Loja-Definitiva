import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import compra3 from '../Imagem/compra3.jpg'
import {Carousel, CarouselItem} from 'react-bootstrap'
import promocao from '../Imagem/promocao.jpg'
import desconto2 from '../Imagem/desconto2.png'



export default function Inicial() {


    return(
     
                <div>
                    <div className="col-lg-6 col-md-6 mx-auto">
                        <h4>Confira nossas ofertas</h4>
                        <h6>Conheça nossa loja, seja muito bem vindo!</h6>
                        <br></br>
                    </div>
                    {/*Inicio do carousel*/}
                     <Carousel>
                        <CarouselItem>
                                <img
                                 className="bloco d w-100"
                                 src={desconto2} style={{width:'500px', height:'450px'}} 
                                 alt="primeiro bloco"
                                 />
                             <Carousel.Caption>
                                <h3>Super descontos</h3>  
                                <p>Todos os dias, dezenas de descontos para você!</p>
                            </Carousel.Caption>   
                         </CarouselItem>

                        <CarouselItem>
                                <img
                                 className="bloco d w-100"
                                 src={promocao} style={{width:'500px', height:'450px'}} 
                                 alt="primeiro bloco"
                                 />
                              <Carousel.Caption>
                             <h3>Voucher Promocional</h3>  
                             <p>Seja um cliente fiel e ganhe vouchers!</p>
                             </Carousel.Caption>   
                         </CarouselItem>

                        <CarouselItem>
                                <img
                                 className="bloco d w-100"
                                 src={compra3} style={{width:'500px', height:'450px'}} 
                                 alt="primeiro bloco"
                                 />
                             <Carousel.Caption>
                             <h3>Da nossa familia para a sua</h3>  
                             <p>Venha você tambem fazer parte!</p>
                             </Carousel.Caption>   
                         </CarouselItem>
                    </Carousel>
                    {/*Fim do carousel*/}
                </div>
    );
   
}