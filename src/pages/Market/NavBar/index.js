import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router-dom';
import { useCartContext } from 'common/context/Cart';

export default function NavBar() {
	const history = useHistory();
	const { amountProducts } = useCartContext();
	return (
		<Nav>
			<Logo />
			<IconButton onClick={() => history.push('/cart')} disabled={amountProducts === 0}>
				<Badge
					color="primary"
					badgeContent={amountProducts}
				>
					<ShoppingCartIcon />
				</Badge>
			</IconButton>
		</Nav>
	);
}