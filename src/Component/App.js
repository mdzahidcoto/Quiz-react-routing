import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./Logo";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Quiz from "./Pages/Quiz";
import SignUp from "./Pages/SignUp";
import { AuthProvider } from "../Context/AuthContext";

function App() {
  return (
    <Router>
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Logo>{<Login />}</Logo>} />
        <Route path="/signup" element={<Logo>{<SignUp />}</Logo>} />
        <Route path="/quiz" element={<Logo>{<Quiz />}</Logo>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      </AuthProvider>
    </Router>
    );
}

export default App;
