import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>amader-elaka</h1>
      <p>আপনার এলাকার সকল নাগরিক সেবা এক জায়গায়</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Public Pages */}
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/government-services" element={<div>সরকারি সেবা</div>} />
        <Route path="/emergency" element={<div>Emergency</div>} />
        <Route path="/hospitals" element={<div>Hospitals</div>} />
        <Route path="/doctors" element={<div>Doctors</div>} />

        {/* Admin */}
        <Route path="/admin" element={<div>Admin Panel</div>} />

        {/* Unknown URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
