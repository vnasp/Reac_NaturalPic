import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Favorites from "./views/Favorites"
import Home from "./views/Home"
import NotFound from "./views/NotFound"


const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
