import React from 'react'
import Header from './components/Header'
import SectionAbout from './components/SectionAbout'
import SectionFeatures from './components/SectionFeatures';
import SectionTours from './components/SectionTours/index';

const App: React.FC = () => {
return (
<div className="App">
  <Header />

  <main>
    <SectionAbout />

    <SectionFeatures />

    <SectionTours />

  </main>
  
</div>
);
}

export default App;