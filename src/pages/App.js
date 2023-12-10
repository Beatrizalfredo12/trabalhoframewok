import Index from './pages/Index';
import Objetos from './pages/Objetos';
import ObjetoDetalhado from './pages/ObjetoDetalhado';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/objetos" exact component={Objetos} />
                <Route path="/objetos/:nome" component={ObjetoDetalhado} />
                <Route component={NotFound} /> {/* Rota para 404 */}
            </Switch>
        </Router>
    );
}

export default App;