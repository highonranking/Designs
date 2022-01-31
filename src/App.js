import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Destinations from './components/Destinations/Destinations';
import Hotels from './components/Hotels/Hotels';
import Flights from './components/Flights/Flights';
import Bookings from './components/Bookings/Bookings';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Language from './components/Language/Language';
import './components/Hero/Hero';
import Hero from './components/Hero/Hero';
function App() {
  return (
    <Router>
    <Navbar />
    <Hero/>
    <Routes>
      <Route exact path="/destinations" component={Destinations} />
      <Route path="/hotels" component={Hotels} />
      <Route path="/flights" component={Flights} />
      <Route path="/bookings" component={Bookings} />
    </Routes>
  </Router>
  );
}

export default App;
