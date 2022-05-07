import "./App.css";
// Switch is replaced with Routes && component with element
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninPage from "../src/components/pages/signin";
import Home from "./components/pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/signin" element={<SigninPage />} exact />
            </Routes>
        </Router>
    );
}

export default App;
