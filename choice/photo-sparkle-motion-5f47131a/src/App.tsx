import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
