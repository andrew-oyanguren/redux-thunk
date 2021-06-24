import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  // need to gain access to our cart items array
  const cartItemsArray = useSelector(state => state.cart.items);

  // then we can map the array into jsx items

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemsArray.map(item => (
          <CartItem
            key={item.id} // once again help React!
            item={{ // passing prop as an (item) object. 
              id: item.id,
              title: item.name,
              price: item.price,  
              quantity: item.quantity, 
              total: item.totalPrice, 
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
