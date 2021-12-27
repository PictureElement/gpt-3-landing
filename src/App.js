import './App.scss';
import { Header, Hero, SocialProof, About, Features, Possibilities, CTA, Blog, Footer } from './components';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Features />
        <Possibilities />
        <CTA />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
