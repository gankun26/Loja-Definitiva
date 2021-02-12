import {Switch, Route} from 'react-router-dom';
import Produtos from './Pages/Produtos';
import Pedidos from './Pages/Pedidos';
import Contatos from './Pages/Contato';
import Lojas from './Pages/Lojas';
import Inicial from './Pages/Inicial';


function Rotas () {
    return(
        <Switch>
            
            <Route exact path="/produto" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/contatos" component={Contatos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/inicial" component={Inicial} />
            
        </Switch>
    )
}

export default Rotas;
