import "./App.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Tour } from "./components/ourTour/Tour";
import { Booking } from "./components/booking/Booking";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="tour" element={<Tour />} />
          <Route path="booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;