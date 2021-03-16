import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { UseRoutes } from './routes';

function App() {
  const routes = UseRoutes(true);
  return (
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
