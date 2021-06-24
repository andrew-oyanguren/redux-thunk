import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/slices/ui';

const CartButton = (props) => {

  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);

  const dispatch = useDispatch(); // gives us access to dispatch() function provided by redux.

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
