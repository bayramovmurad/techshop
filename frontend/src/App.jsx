import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import { Route, Routes } from "react-router-dom"
import ProductScreen from "./screens/ProductScreen"
import BasketCartScreen from "./screens/BasketCartScreen"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import PrivateRoute from "./components/PrivateRoutes"
import ShippingScreen from "./screens/ShippingScreen"

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product-details/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<BasketCartScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />

            <Route path='' element={<PrivateRoute />}>
              <Route path='/shipping' element={<ShippingScreen/>} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}
export default App