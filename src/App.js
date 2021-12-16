import './App.scss';
import { Header, Hero, SocialProof, About, Footer } from './components';

function App() {
  return (
    <div className="app">
      <div className="app__gradient">
        <Header />
        <Hero />
      </div>
      <SocialProof />
      <About />
      <Footer />
    </div>
  );
}

export default App;
