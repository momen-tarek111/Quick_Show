import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import SeatLayout from "./pages/SeatLayout"
import MyBookings from "./pages/MyBookings"
import Favorite from "./pages/Favorite"
import {Toaster} from "react-hot-toast"
import Layout from "./pages/admin/Layout"
import Dashboard from "./pages/admin/Dashboard"
import AddShows from "./pages/admin/AddShows"
import ListShows from "./pages/admin/ListShows"
import ListBookings from "./pages/admin/ListBookings"
import {useAppContext} from "./context/AppContext"
import { SignIn } from "@clerk/react"
import Loading from "./components/Loading"
import NotFound from "./components/NotFound"
function App() {
  const isAdminRoute =useLocation().pathname.startsWith("/admin");
  const {user}=useAppContext()
  return (
    <>
      <Toaster/>
      {!isAdminRoute&&<Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/movies/:id/:date" element={user?<SeatLayout/>:(
          <div className="min-h-screen flex justify-center items-center">
            <SignIn fallbackRedirectUrl={'/movies'}/>
          </div>
        )}/>
        <Route path="/my-bookings" element={user?<MyBookings/>:(
          <div className="min-h-screen flex justify-center items-center">
            <SignIn fallbackRedirectUrl={'/my-bookings'}/>
          </div>
        )}/>
        <Route path="/loading/:nextUrl" element={<Loading/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/admin/*" element={user?<Layout/>:(
          <div className="min-h-screen flex justify-center items-center">
            <SignIn fallbackRedirectUrl={'/admin'}/>
          </div>
        )}>
          <Route index element={<Dashboard/>}/>
          <Route path="add-shows" element={<AddShows/>}/>
          <Route path="list-shows" element={<ListShows/>}/>
          <Route path="list-bookings" element={<ListBookings/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {!isAdminRoute&&<Footer/>}
    </>
  )
}

export default App