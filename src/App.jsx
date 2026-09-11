import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";

function Placeholder({ title }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "inherit",
        fontSize: "24px",
        fontWeight: "600",
      }}
    >
      {title}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Public Pages */}
        <Route
          path="/dashboard"
          element={<Placeholder title="Dashboard" />}
        />

        <Route
          path="/government-services"
          element={<Placeholder title="সরকারি সেবা" />}
        />

        <Route
          path="/emergency"
          element={<Placeholder title="Emergency" />}
        />

        <Route
          path="/hospitals"
          element={<Placeholder title="হাসপাতাল" />}
        />

        <Route
          path="/doctors"
          element={<Placeholder title="ডাক্তার খুঁজুন" />}
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={<Placeholder title="Admin Panel" />}
        />

        {/* Unknown route */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
