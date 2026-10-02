import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AmbientPlayer from "./components/AmbientPlayer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import History from "./pages/History";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/menu"
              element={<Menu />}
            />

            <Route
              path="/history"
              element={<History />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/order"
              element={<Order />}
            />

            <Route
              path="*"
              element={
                <section className="page-section not-found">

                  <div className="section-heading">

                    <p className="eyebrow">
                      404
                    </p>

                    <h1>
                      Page Not Found
                    </h1>

                    <p>
                      The page you're looking for
                      doesn't exist.
                    </p>

                  </div>

                </section>
              }
            />

          </Routes>
        </main>

        <AmbientPlayer />

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;