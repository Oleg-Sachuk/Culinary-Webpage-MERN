import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { UseRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, login, logout, userId} = useAuth();
  const isAuth = !!token;
  const routes = UseRoutes(isAuth);
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuth}}>
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
