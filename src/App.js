import './App.scss';
import { Header, Hero, SocialProof, About, Features, Footer, Possibilities } from './components';

function App() {
  return (
    <div className="app">
      <div className="app__gradient">
        <Header />
        <Hero />
      </div>
      <SocialProof />
      <About />
      <Features />
      <Possibilities />
      <Footer />
    </div>
  );
}

export default App;
