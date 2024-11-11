import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import Manage from "./pages/Manage";
import SearchResults from "./components/SearchResults";

export default function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
}
