import {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom';

//import Produtos from './Pages/Produtos';
//import Pedidos from './Pages/Pedidos';
//import Contatos from './Pages/Contato';
//import Lojas from './Pages/Lojas';
//import Inicial from './Pages/Inicial';

const Produtos = lazy(() => import('./Pages/Produtos'))
const Pedidos = lazy(() => import('./Pages/Pedidos'))
const Contatos = lazy(() => import('./Pages/Contato'))
const Lojas = lazy(() => import('./Pages/Lojas'))
const Inicial = lazy(() => import('./Pages/Inicial'))



function Rotas () {
    return(
        <Switch>
           <Suspense fallback={<p>Carregando...</p>}>

            <Route exact path="/produto" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/contatos" component={Contatos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/inicial" component={Inicial} />

         </Suspense> 
        </Switch>
    )
}

export default Rotas;
