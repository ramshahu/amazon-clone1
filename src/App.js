
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51OHLt2IwAdRUmDRdRXhk6XODLN7M2aKBVei2fAiRHscqXvRBX0Ki2tbQUL0DvB4kYyl7H19azh5zVNetq48jTEFx00evt9Qfkn');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once the app components load...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);
  return (
    <>
      <Router>

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/orders' element={[<Header/>, <Orders />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
