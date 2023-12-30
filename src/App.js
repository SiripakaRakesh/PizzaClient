import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddPizza from './components/Admin/AddPizza'
import Ingredients from './components/Admin/Ingredients'
import CustomPizzaOrder from './components/Admin/CustomPizzaOrder'
import OrderPayMorePizza from './components/Admin/OrderPayMorePizza'
import OrderPayPizza from './components/Admin/OrderPayPizza'
import PizzaList from './components/Admin/PizzaList'
import UpdatePizza from './components/Admin/UpdatePizza'
import UpdateIngredients from './components/Admin/UpdateIngredients'
import PayNow from './components/Payment/PayNow'
import PaymentComponent from './components/Payment/PaymentComponent'
import Login from './components/Registration/Login'
import SignUp from './components/Registration/SignUp'
import VerifyEmail from './components/Registration/VerifyEmail'
import ForgotPassword from './components/Registration/ForgotPassword'
import AddToCart from './components/Users/AddToCart'
import CustomPizza from './components/Users/CustomPizza'
import UserOrderPayMorePizza from './components/Users/UserOrderPayMorePizza'
import UserOrderPizza from './components/Users/UserOrderPizza'
import UserPizzaList from './components/Users/UserPizzaList'
import Home from './pages/Home'
import PrivateComponent from './components/static/PrivateComponent'
import UserWelcome from './components/static/Welcome'
import Inventory from './components/Admin/Inventory'

const App = () => {
  return (
    <>
      <div className='separator'>
        <header>
        </header>
        <Router>
          <Routes>
            <Route Component={PrivateComponent}/>
            <Route path='/welcoming-greet' Component={UserWelcome}/>
            <Route exact path='/' Component={Home}></Route>
            <Route path='/admin/add-pizza' Component={AddPizza}></Route>
            <Route path='/admin/ingredients' Component={Ingredients}></Route>
            <Route path='/admin/custom-pizza/order' Component={CustomPizzaOrder}></Route>
            <Route path='/admin/order-more/pizza' Component={OrderPayMorePizza}></Route>
            <Route path='/admin/order/pizza' Component={OrderPayPizza}></Route>
            <Route path='/admin/pizza-list' Component={PizzaList}></Route>
            <Route path='/admin/update/pizza' Component={UpdatePizza}></Route>
            <Route path='/admin/update/ingredients' Component={UpdateIngredients}></Route>
            <Route path='/admin/inventory' Component={Inventory}></Route>
            <Route path='/pay/now' Component={PayNow}></Route>
            <Route path='/payment/component' Component={PaymentComponent}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/signup' Component={SignUp}></Route>
            <Route path='/verify/email' Component={VerifyEmail}></Route>
            <Route path='/forgot/password' Component={ForgotPassword}></Route>
            <Route path='/add-to-cart' Component={AddToCart}></Route>
            <Route path='/custom-pizza' Component={CustomPizza}></Route>
            <Route path='/user/order-pay-more/pizza' Component={UserOrderPayMorePizza}></Route>
            <Route path='/user/order-pizza' Component={UserOrderPizza}></Route>
            <Route path='/user/pizza-list' Component={UserPizzaList}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App