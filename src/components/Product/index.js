import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useCartContext } from 'common/context/Cart';

function Product({ 
	name,
	photo,
	id,
	price,
	unit  
}) {
	const { cart, addProduct, removeProduct} = useCartContext();
	const productInCart = cart.find(product => product.id === id);
	
	return (
		<Container>
			<div>
				<img 
					src={`/assets/${photo}.png`}
					alt={`${name}`} 
				/>
				<p>
					{name} - ${price?.toFixed(2)} <span>{unit}</span>
				</p>
			</div>

			<div>
				<IconButton
					onClick={() => removeProduct(id)}
					disabled={!productInCart}
					color="secondary"
				>
					<RemoveIcon />
				</IconButton>
				{productInCart?.quantity || 0}
				<IconButton onClick={() => addProduct({ id, name, photo, price, unit })}
					color="primary"		
				>
					<AddIcon /> 
				</IconButton>
			</div>
		</Container>
	);
}

export default memo(Product);