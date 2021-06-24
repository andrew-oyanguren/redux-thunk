import { uiActions } from '../slices/ui';
import { cartActions } from '../slices/cart';

export const fetchCartData = () => {
  return async (dispatch) => {
    // wrapping fetch in another function to call it in a try/catch
    const fetchData = async () => {
      const response = await fetch('https://react-http-818a0-default-rtdb.firebaseio.com/cart.json');

      // always check if reponse.ok, and throw error if not
      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const responseData = await response.json();

      return responseData; // we need to return data because we are in a seperate function
    };

    try {
      const cartData = await fetchData(); // we must turn parent function into async to await.
      // use cartData to set our cart
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));
    } catch(error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error', 
        message: 'Fetching cart data failed!'
      }));
    }
  }
};

// we will export this action thunky action creator
export const sendCartData = (cart) => {
  // (dispatch) argument expends the use of dispatch into the nested functions.
  return async (dispatch) => {
    //show sending notification
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data'
    }));

    const sendRequest = async () => {
      // Send 'PUT' request to send cart data to server
      const response = await fetch('https://react-http-818a0-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        })
      });

      if (!response.ok) { // add not okay check in correct programming order.
        throw new Error('Sending cart data failed!');
      }
    };

    try {
      await sendRequest(); // we use await because it was derrived in an async function.

      // success status Notification
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }));
    } catch(error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error', 
        message: 'Sending cart data failed!'
      }));
    }
    
  };
};