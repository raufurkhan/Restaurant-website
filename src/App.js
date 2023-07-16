import { Fragment, useState } from "react";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {

const [cartIsShown,setCartShown]=useState(false)

const showCardHandler=()=>{
  setCartShown(true)
}

const hideCardHandler=()=>{
  setCartShown(false)
}

  return (
    <Fragment>
      { cartIsShown && <Cart onClose={hideCardHandler}/>}
      <Header onShowCart={showCardHandler}></Header>
      <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;
