import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="bg-primary">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
