import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BaseBallHome from "./Pages/BaseBall/BaseBallHome/BaseBallHome";
import BasketBallHome from "./Pages/BasketBall/BasketBallHome/BasketBallHome";
import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./Pages/context/AuthProvider/AuthProvider";
import CricketHome from "./Pages/Cricket/CricketHome/CricketHome";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import EventRegister from "./Pages/EventRegister/EventRegister";
import FootBallHome from "./Pages/Football/FootBallHome/FootBallHome";
import HockeyPuckHome from "./Pages/HockeyPuck/HockeyPuckHome/HockeyPuckHome";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";
import Home from "./Pages/Home/Home/Home";
import SingleProduct from "./Pages/Home/SingleProduct/SingleProduct";
import Login from "./Pages/Login/Login";
import PlayerDetails from "./Pages/PlayerDetails/PlayerDetails";
import Register from "./Pages/Register/Register";
import TableTennisHome from "./Pages/TableTennis/TableTennisHome/TableTennisHome";
import VolleyBallHome from "./Pages/VolleyBall/VolleyBallHome/VolleyBallHome";
import AddAdmin from "./Pages/Dashboard/AddAdmin/AddAdmin";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AddTicketBooking from "./Pages/Dashboard/AddTicketBooking/AddTicketBooking";
import AddEventRegister from "./Pages/Dashboard/AddEventRegister/AddEventRegister";
import AdminRoute from "./Pages/AdminRoute/AdminRoute";
import ContestsRegister from "./Pages/ContestsRegister/ContestsRegister";
import CricketPlayerInfo from "./Pages/Cricket/CricketPlayerInfo/CricketPlayerInfo";
import VolleyBallDetails from "./Pages/VolleyBall/VolleyBallDetails/VolleyBallDetails";
import HockeyPlayersDetails from "./Pages/HockeyPuck/HockeyPlayersDetails";
import TableTennishDetails from "./Pages/TableTennis/TableTennishDetails/TableTennishDetails";
import BaseBallDetails from "./Pages/BaseBall/BaseBallDetails/BaseBallDetails";
import BaseketBallDetails from "./Pages/BasketBall/BaseketBallDetails/BaseketBallDetails";


// import Nextmatch from './Pages/Nextmatch/Nextmatch';

// test

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/football" element={<FootBallHome />} />
            <Route path="/cricket" element={<CricketHome />} />
            <Route path="/hockeyPuck" element={<HockeyPuckHome />} />
            <Route path="/tableTennis" element={<TableTennisHome />} />
            <Route path="/baseBall" element={<BaseBallHome />} />
            <Route path="/basketBall" element={<BasketBallHome />} />
            <Route path="/volleyBall" element={<VolleyBallHome />} />

            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contestsregister" element={<ContestsRegister />} />
            <Route path="/event-register" element={<EventRegister />} />
            <Route path="/playerDetails/:id" element={<PlayerDetails />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route path="/cricketPlayer/:id" element={<CricketPlayerInfo />} />
            <Route path="/volleyballplayer/:id" element={<VolleyBallDetails />} />
            <Route path="/hokeypalyer/:id" element={<HockeyPlayersDetails />} />
            <Route path="/tableTanishPlayer/:id" element={<TableTennishDetails />} />

            <Route path="/baseballplayer/:id" element={<BaseBallDetails />} />

            <Route path="/basketBallPlayer/:id" element={<BaseketBallDetails />} />



            <Route path="/dashboard" element={<Dashboard />}>
            <Route path={`/dashboard/addproduct`} element={<AdminRoute><AddProduct></AddProduct></AdminRoute>} />
            <Route path={`/dashboard/addadmin`} element={<AdminRoute><AddAdmin></AddAdmin></AdminRoute>} />
            <Route path={`/dashboard/addreview`} element={<AddReview></AddReview>} />
            <Route path={`/dashboard/addticketbooking`} element={<AdminRoute><AddTicketBooking></AddTicketBooking></AdminRoute>} />
            <Route path={`/dashboard/loadProdect`} element={<AddReview />} />
            <Route path={`/dashboard/addEventRegister`} element={<AdminRoute><AddEventRegister /></AdminRoute>} />

            </Route>
            
            
            

            
          
          
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
