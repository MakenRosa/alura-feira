import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './User';
import { usePaymentContext } from './Payment';

export const CartContext = createContext();
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [amountProducts, setAmountProducts] = useState(0);
	const [total, setTotal] = useState(0);
	return (
		<CartContext.Provider value={{ cart, setCart, amountProducts, setAmountProducts, total, setTotal }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	const { cart, setCart, amountProducts, setAmountProducts, total, setTotal } = useContext(CartContext);
	const { paymentMethod } = usePaymentContext();
	const { setBalance } = useContext(UserContext);
	
	
	function updateProduct( id, quantity ) {
		return setCart(prevCart => prevCart.map(product => { 
			if (product.id === id) {
				product.quantity += quantity;
			}
			return product;
		}));
	}

	function addProduct( newProduct ) {
		const productInCart = cart.some(product => product.id === newProduct.id);
		if (!productInCart) {
			newProduct.quantity = 1;
			return setCart(prevCart => [...prevCart, newProduct]);
		}
		updateProduct(newProduct.id, 1);
	}

	function removeProduct( id ) {
		const productInCart = cart.find(product => product.id === id);
		if (productInCart.quantity === 1) {
			return setCart(prevCart => prevCart.filter(product => product.id !== id));
		} 
		updateProduct(id, -1);
	}


	function calculateInterest( total ) {
		return (total * paymentMethod.interest);
	}

	function purchase(newBalance) {
		setCart([]);
		setBalance(newBalance);
	}

	useEffect(() => {
		const {amount, total} = cart.reduce((acc, product) => ({amount: acc.amount + product.quantity,
			total: acc.total + product.price * product.quantity
		}), 
		{
			amount: 0,
			total: 0,
		});
		setAmountProducts(amount);
		setTotal(total);
	}, [cart]);


	return ({ cart, setCart, addProduct, removeProduct, amountProducts, total, purchase, calculateInterest });
};