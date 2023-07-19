import { createContext, useContext, useState } from 'react';

export const PaymentContext = createContext();
PaymentContext.displayName = 'PaymentContext';

export const PaymentProvider = ({ children }) => {
	const paymentMethods = [{
		id: 1,
		name: 'PIX',
		interest: 0.9,
	}, {
		id: 2,
		name: 'Boleto',
		interest: 1,
	}, {
		id: 3,
		name: 'Credit Card',
		interest: 1.1,
	}, {
		id: 4,
		name: 'Installments',
		interest: 1.2,
	}];
	const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
	return (
		<PaymentContext.Provider value={{ paymentMethod, setPaymentMethod, paymentMethods }}>
			{children}
		</PaymentContext.Provider>
	);
};

export const usePaymentContext = () => {
	const { paymentMethod, setPaymentMethod, paymentMethods } = useContext(PaymentContext);
	
	function updatePaymentMethod( id ) {
		const paymentMethod = paymentMethods.find(paymentMethod => paymentMethod.id === id);
		setPaymentMethod(paymentMethod);
	}

	return ({ paymentMethod, setPaymentMethod, paymentMethods, updatePaymentMethod });
};