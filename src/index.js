import React from "react"
import ReactDom from "react-dom/client"
import "./style.css"
import Navbar from "./components/Navbar.js"
import Search from "./components/search.js"
import Products from "./components/product.js"
import About from "./components/About.js"
import Footer from "./components/footer.js"




const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
  <div>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <About></About>
    <Footer></Footer>
  </div>
)



