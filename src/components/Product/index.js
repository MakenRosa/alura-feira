import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Product({ 
  name,
  photo,
  id,
  price,
  unit  
}) {

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
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>
            
        <IconButton>
          <AddIcon /> 
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Product);