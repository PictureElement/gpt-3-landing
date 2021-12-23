import './App.scss';
import { Header, Hero, SocialProof, About, Features, Possibilities, CTA, Blog, Footer } from './components';

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
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
