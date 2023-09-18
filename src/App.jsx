import { useState } from "react";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from './pages/Error';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App () {
    const [ currentPage, setCurrentPage ] = useState('About');
    return (
    <>
        <main>
            <section>
                <div className="container">
                    <Header setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
                </div>
                <div className="container">
                    {currentPage === 'About' && <About />}
                    {currentPage === 'Contact' && <Contact />}
                    {currentPage === 'Portfolio' && <Portfolio />}
                    {currentPage === 'Resume' && <Resume />}
                </div>
            </section>
        </main>
        <Footer />
    </>
    )
}

export default App;