import logo from './assets/logo.svg';
import { Header, Footer } from './components';

function App() {
  return (
    <div>
      <img style={{width: '100px'}} src={logo} alt="..." />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
