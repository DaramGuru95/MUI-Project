import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Referance from './Components/Hooks/useRef';


function Header() {
    return (
        <div>
            <ul className='components'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about"> About </Link></li>
                <li><Link to="contact">Contact US</Link></li>
            </ul>
        </div>
    )
}

function ErrorPage() {
    return (
        <div>
            <h1>
                Oops Page not found
            </h1>
        </div>
    )
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>

            </BrowserRouter>
            <Referance />
        </>
    );
}

export default App;
