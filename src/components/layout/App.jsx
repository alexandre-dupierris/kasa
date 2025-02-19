import {Routes, Route} from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import Accomodation from "../pages/Accomodation"
import Error from "../pages/Error"
import ScrollToTop from "./ScrollToTop"
import jsonData from "../json/logements.json"
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
  <>
    <Header />
    <main>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={<Home jsonData={jsonData} />} />
        <Route 
          path="/about" 
          element={<About />} />
        <Route 
          path="/accomodation/:id" 
          element={<Accomodation jsonData={jsonData} />} />
        <Route 
          path="*" 
          element={<Error />} />
      </Routes>
    </main>
    <Footer />
  </>
  )
}

export default App
