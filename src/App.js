import React from 'react';
import Contact from "./Contact";
import About from "./About";
import Home from "./Home"
import { BrowserRouter,Link,Routes,Route} from "react-router-dom"
function App() {
    <BrowserRouter>
        <Link to ="./contact">Contact</Link>
        <Link to ="./about">About</Link>
        <Link to ="./Home">Home</Link>

        <Routes>
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/Home" element={<Home />}/>
        </Routes>
    </BrowserRouter>
}

export default App;


