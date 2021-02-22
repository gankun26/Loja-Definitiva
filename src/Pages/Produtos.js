import {useState, useEffect} from 'react';
import Produto from '../components/Produto'
import { Container, Row} from "react-bootstrap"
import  {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

//O componente Produto esta sendo renderizado com SSR

export default function Produtos () {
    const produtosreducer = useSelector(state => state.produtos.dados)
    const [prod, setProd] = useState(produtosreducer) 
    const [filtro, setFiltro] = useState(false)
    
    const dispatch = useDispatch()

     
     const filtrar = ({target}) =>{
        const {id} = target
          setFiltro(id)
     }

     const conn = () => {
         axios.get('http://localhost:4000/Produtos')
         .then(res => dispatch({type: 'EXIBIR', payload: res.data}))
     }
     useEffect(conn, [produtosreducer])

 

    return (

        <div className="col-lg-6 col-md-6 mx-auto">
            <h4>Exibição de produtos</h4>
            <h6>Confira abaixo alguns de nossos produtos.</h6>
            <br></br>

            <div id="filtros">
                    <ul className="list-group aligh-center">
                        <button className="list-group-item bg-primary" onClick={filtrar} id="fogao">Fogões</button>
                        <button className="list-group-item bg-primary" onClick={filtrar} id="geladeira">Geladeiras</button>
                        <button className="list-group-item bg-primary" onClick={filtrar} id="liquidificador">Liquidificadores</button>
                        <button className="list-group-item bg-primary" onClick={filtrar} id="maquina de lavar">Maquinas de lavar</button>
                        <button className="list-group-item bg-primary" onClick={filtrar} id="limpar">Limpar</button>

                    </ul>
                    <br></br>
                </div>
            
        <Container>
            <Row>  
               {prod.map(item => {
                   if(!filtro){
                        return <Produto key={item.id} dados={item}  />
                   }
                   else if(filtro === item.categoria){
                        return <Produto key={item.id} dados={item} />
                   }
                   else if(filtro === "limpar"){
                        return <Produto key={item.id} dados={item} />
                   }
               })}
            </Row>
        </Container>  

        </div>
    )
}
