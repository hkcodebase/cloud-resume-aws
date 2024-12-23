import './App.css'
import Home from "./components/Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Counter from "./components/Counter.tsx";
import React from "react";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/xdsgghd-ap-i0insight" element={<Counter />} />*/}
            </Routes>
        </BrowserRouter>
    );
};

export default App;