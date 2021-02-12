import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import zap from '../Imagem/zap.png'
import {Card, Button} from 'react-bootstrap'
import email from '../Imagem/email.jpg'



export default function Contatos() {


    return(

        <div className="col-lg-6 col-md-6 mx-auto">
            <h4>Entre em contato</h4>
            <h6>Nos envie dúvidas, reclamações ou sugestões, através de nosso canais abaixo.</h6>
            <br></br>

            {/*Cards*/}
            <div class="card-deck">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={zap} />
                    <Card.Body>
                      <Card.Title>Whatsapp</Card.Title>
                        <Card.Text>
                           Para um melhor atendimento, entre em contato conosco através de nosso whatsapp.<br></br>
                           Assim facilitando seu atendimento.
                        </Card.Text>
                          <Button variant="primary">Chat</Button>
                    </Card.Body>
                </Card>
                 

                
                <Card style={{ width: '18rem'}}>
                  <Card.Img variant="top" src={email} style={{width:'220px', height:'220px', marginLeft:'100px'}} />
                    <Card.Body>
                      <Card.Title>Email</Card.Title>
                        <Card.Text>
                           Para um melhor atendimento, entre em contato conosco através de nosso Email.<br></br>
                           Assim facilitando seu atendimento.
                        </Card.Text>
                          <Button variant="primary">Email</Button>
                    </Card.Body>
                </Card>
            </div>
            {/*Fim Cards*/}

            
        </div>
    
    );
   
}
