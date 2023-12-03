import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </div>
    )
}

export default App;