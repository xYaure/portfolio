import React from 'react';
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

const App = () =>{
    return (
        <>
        <Sidebar />
        <main className='main'>
            <Home />
            <About />
            <Projects />
            <Services />
            <Portfolio />
            <Contact />
        </main>
        </>
    )
}

export default App