import React from 'react'
import Navbar from "../app/components/Navbar"
import Carousel from "./components/Carousel"
import Progressor from "./components/Progressor"
import ProductList from "./components/ProductList"
import Banner from "./components/Banner"
import Burger from "./components/Burger"
import Menu from "./components/MenuItem"
import Offer from "./components/Offer"
import Card from "./components/Card"
import Reservation from "./components/Reservation"
import Footer from "./components/Footer"


export default function App() {
  return (
   <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen">
   <Navbar />
   <Carousel />
   <Progressor />
   <ProductList />
   <Banner />
   <Burger />
   <Menu />
   <Offer />
   <Card />
   <Reservation />
   <Footer />
   
 </div>
  )
}
