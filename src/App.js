import Menu from './components/menu'
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Rotas from './rotas';
import './App.css'
import Footer from './components/footer/Footer'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
         <Menu />
      </header>

      <main>
        <Container fluid>
          <Rotas />
        </Container>
      </main>

      <body>
        <Footer />
      </body>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
