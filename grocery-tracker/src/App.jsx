import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import AddGrocery from "./components/AddGrocery";
import DeleteGrocery from "./components/DeleteGrocery";
import UpdateGrocery from "./components/UpdateGrocery";
import GroceryList from "./components/GroceryList";
import ExpiringSoon from "./components/ExpiringSoon";
import Auth from "./pages/Auth";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddGrocery />} />
          <Route path="/delete" element={<DeleteGrocery />} />
          <Route path="/update/:id" element={<UpdateGrocery />} />
          <Route path="/groceries" element={<GroceryList />} />
          <Route path="/expiring-soon" element={<ExpiringSoon/>} />
          {/* <Route path="/auth" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

