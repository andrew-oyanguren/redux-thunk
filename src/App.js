import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/actions/cart-actions';

let isInitial = true; // used to create if-check so that we dont send data at reload.

function App() {

  const showCart = useSelector(state => state.ui.cartIsVisible); // recieves redux state automatically, and is executed by redux;
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();

  // smart to create a new useEffect w/ empty dependencies array from onload logic
  useEffect(() => {
    dispatch(fetchCartData()); // fetch cart data
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) { // checking if cart data is true!
      dispatch(sendCartData(cart)); // send cart data
    }

  }, [cart, dispatch]); // redux will make sure dispatch never causes a re-run, as it knows it will never change.

  return (
    <Fragment>
      {notification && (
        <Notification 
          status={notification.status} 
          title={notification.title} 
          message={notification.message} 
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
