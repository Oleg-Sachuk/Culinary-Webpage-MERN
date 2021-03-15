import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <h1>Hello!</h1>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
