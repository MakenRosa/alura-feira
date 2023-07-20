import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useContext, useMemo, useState } from 'react';
import { Container, BackButton, TotalContainer, PaymentContainer } from './styles';  
import { useHistory } from 'react-router-dom';
import { useCartContext } from 'common/context/Cart';
import Product from 'components/Product';
import { usePaymentContext } from 'common/context/Payment';
import { UserContext } from 'common/context/User';

function Cart() {

	const [openSnackbar, setOpenSnackbar] = useState(false);
	const { cart, calculateInterest, purchase, total: totalInCart} = useCartContext();
	const { balance = 0 } = useContext(UserContext);
	const { paymentMethod, paymentMethods, updatePaymentMethod} = usePaymentContext();
	const history = useHistory();
	const totalBalance = useMemo(() => balance - calculateInterest(totalInCart), [balance, calculateInterest, totalInCart]);
	const difference = (totalInCart - calculateInterest(totalInCart)).toFixed(2);
	return (
		<Container>
			<BackButton onClick={() => history.goBack()}/>

			<h2>Cart</h2>

			<PaymentContainer>
				<InputLabel> Payment Method </InputLabel>
				<Select value={paymentMethod.id} onChange={(e) => updatePaymentMethod(e.target.value)}>
					{
						paymentMethods.map(paymentMethod => (
							<MenuItem key={paymentMethod.id} value={paymentMethod.id}>
								{paymentMethod.name}
							</MenuItem>
						))
					}
				</Select>
			</PaymentContainer>
			<div>
				{cart.map(product => 
					<Product {...product} key={product.id} />
				)}
			</div>
			<TotalContainer>
				<div>
					<h2> Balance: </h2>
					<span> $ {Number(balance).toFixed(2)} </span>
				</div>
				<div>
					<h2>Total in Cart:</h2>
					<span>$ {Number(totalInCart).toFixed(2)}</span>
				</div>
				<div>
					{difference > 0 ? (
						<>
							<h2>Discount:</h2>
							<span>$ -{Number(difference).toFixed(2)}</span>
						</>
					) : (
						<>
							<h2>Interest:</h2>
							<span>$ +{Number(difference*-1).toFixed(2)}</span>
						</>
					)}

				</div>

				<div>
					<h2> Total Balance: </h2>
					<span> $ {Number(totalBalance).toFixed(2)} </span>
				</div>
			</TotalContainer>
			<Button 
				onClick={() => {
					setOpenSnackbar(true);
					purchase(totalBalance);
				}}
				color="primary"
				variant="contained"
				disabled={totalBalance < 0 || cart.length === 0}
			>
        Buy
			</Button>

			<Snackbar
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				open={openSnackbar}
				onClose={() => setOpenSnackbar(false)} 
			>
				<MuiAlert 
					onClose={() => setOpenSnackbar(false)}
					severity="success"
				>
          Purchase made successfully!
				</MuiAlert>
			</Snackbar>
		</Container>
	);
}

export default Cart;