import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <Gallery />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
