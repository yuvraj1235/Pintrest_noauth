import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PinterestCard from "./pages/Pintrestcard";
import { UserContext } from "./components/Api"; // Corrected syntax
// import PinterestLogin from "./pages/Login"; // Uncomment if still needed
// import ProtectecRouted from "./components/ProtectecRouted"; // Remove if no longer needed/functional


const App = () => {
  const { photos, error } = useContext(UserContext);

  if (error) return <p>Error loading photos.</p>;
  if (!photos || photos.length === 0) return <p>Loading...</p>;

  return (
    <> {/* Replaced Auth0Provider with a simple Fragment */}
      <Routes>
        {/* Choose one of these for the default path: */}
        {/* Option 1: Render Home component directly at the root path "/" */}
        <Route path="/" element={<Home />} />

        {/* Option 2: Redirect from root path "/" to "/home" */}
        {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}

        <Route path="/home" element={<Home />} />
        <Route path="/picture/:id" element={<PinterestCard />} />

        {/* Example of how you'd put PinterestLogin if it's still relevant without Auth0 */}
        {/* <Route path="/login" element={<PinterestLogin />} /> */}

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};

export default App;