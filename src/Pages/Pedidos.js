import {useState} from 'react';
import {Form, Button, Row} from 'react-bootstrap';

export default function Pedidos() {

  const[form, setForm] = useState({
      nome: " ",
      endereco: " ",
      fone: " ",
      valor: " ",
      quantidade: " ",
      preco_final: " "

});

  const controleMudanca =  (evento) => {
      
      
      setForm({
          ...form,
          [evento.target.id]: evento.target.value
      })
      
  }

  const controleEnvio = (evento) => { 
      evento.preventDefault();
      
      const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade);
      
      document.getElementById("preco_final").value = `R$ ${preco_final}`;
  }

    return(
        <Row>
            <div className="col-lg-6 col-md-6 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <h4>Fazer pedidos</h4>
                    <h6>Insira seus dados abaixo e certifique seus pedidos.</h6>
                    <br></br>

                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="endereco" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fone:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="fone" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valor" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Preço Final:</Form.Label>
                        <Form.Control  disabled type="text" id="preco_final" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>

                </Form>
            </div>
        </Row>
    );
}

