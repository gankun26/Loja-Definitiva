import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SP from '../Imagem/SP.webp'
import {Card, Button} from 'react-bootstrap'
import RJ from '../Imagem/RJ.png'



export default function Lojas() {


    return(

        <div className="col-lg-6 col-md-6 mx-auto">
            <h4>Nossas Lojas</h4>
            <h6>Conheça nossas Lojas, abaixo contém os endereços e números para contato.</h6>
            <br></br>

            {/*Cards*/}
            <div class="card-deck">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={SP} />
                    <Card.Body>
                      <Card.Title>São Paulo</Card.Title>
                        <Card.Text>
                           Venha conhecer nossa matriz.<br></br>
                           Rua das flores, número: 1547.<br></br>
                           Fone: 11-12154548
                        </Card.Text>
                          <Button variant="primary">Email</Button>
                    </Card.Body>
                </Card>
                 
                
                <Card style={{ width: '18rem'}}>
                  <Card.Img variant="top" src={RJ} style={{width:'436px', height:'290px'}} />
                    <Card.Body>
                      <Card.Title>Rio de Janeiro</Card.Title>
                        <Card.Text>
                           Venha conhecer nossa filial.<br></br>
                           Rua governador sasha, número: 256.<br></br>
                           Fone: 21-87895446
                        </Card.Text>
                          <Button variant="primary">Email</Button>
                    </Card.Body>
                </Card>

                
            </div>
            {/*Fim Cards*/}
 
        </div>
    
    );
   
}