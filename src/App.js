import "./App.css";
// Switch is replaced with Routes && component with element
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import SigninPage from "./components/pages/signin";

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
