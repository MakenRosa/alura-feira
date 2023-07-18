import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const history = useHistory();
  return (
    <Nav>
      <Logo />
      <IconButton onClick={() => history.push('/cart')}>
        <Badge
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}