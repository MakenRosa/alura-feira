import Cart from 'pages/Cart' 
import Market from 'pages/Market'
import Login from 'pages/Login'
import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Router() {
  const [name, setName] = useState('')
  const [balance, setBalance] = useState(0)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login name={name} setName={setName} balance={balance} setBalance={setBalance} /> 
        </Route>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router