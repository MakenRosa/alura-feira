import Cart from 'pages/Cart' 
import Market from 'pages/Market'
import Login from 'pages/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { UserProvider } from 'common/context/User'
import { CartProvider } from 'common/context/Cart'

function Router() {


  return (
    <BrowserRouter>
      <Switch>
        <UserProvider>
          <Route path="/" exact>
            <Login /> 
          </Route>
          <CartProvider>
            <Route path="/market">
              <Market />
            </Route>
          </CartProvider>
        </UserProvider>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router