import { Home } from "./components/Home"
import { Message } from "./components/Message"
import { Products } from "./components/Products"
import { Footer } from "./pages/Footer"
import { Navbar } from "./pages/Navbar"


function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <Products/>
      <Message/>
      <Footer/>
    </>
  )
}

export default App
