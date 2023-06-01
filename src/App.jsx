import './App.css';

import Header from './components/header/Header'
import HeroSection from './components/hero-section/Hero-section'
import Companies from './components/companies/Companies'
import Residencies from './components/residencies/Residencies';



function App() {
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_container_blur"/>
      <Header/>
      <HeroSection/>
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
