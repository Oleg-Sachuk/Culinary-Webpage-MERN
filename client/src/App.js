import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { UseRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { UserContext } from './context/UserContext';
import { useUser } from './hooks/user.hook';

function App() {
  const { token, login, logout, userId} = useAuth();
  const { email, userlogin, getUser, rmUser} = useUser();
  const isAuth = !!token;
  const routes = UseRoutes(isAuth);
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuth}}>
    <UserContext.Provider value={{email,userId, userlogin, getUser, rmUser}}>
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
    </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
