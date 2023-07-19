import Cart from 'pages/Cart'; 
import Market from 'pages/Market';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from 'common/context/User';
import { CartProvider } from 'common/context/Cart';
import { PaymentProvider } from 'common/context/Payment';

function Router() {


	return (
		<BrowserRouter>
			<Switch>
				<UserProvider>
					<Route path="/" exact>
						<Login /> 
					</Route>
					<CartProvider>
						<PaymentProvider>
							<Route path="/market">
								<Market />
							</Route>
							<Route path="/cart">
								<Cart />
							</Route>
						</PaymentProvider>
					</CartProvider>
				</UserProvider>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;