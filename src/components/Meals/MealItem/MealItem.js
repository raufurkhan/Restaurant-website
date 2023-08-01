
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/create-context'
import { useContext } from 'react'

const MealItem=(props)=>{
const cartCtx=useContext(CartContext)
console.log("check")
const price=`$${props.price.toFixed(2)}`
const addToCartHandler=(amount)=>{

cartCtx.addItem({
id:props.id,
name:props.name,
amount:amount,
price:props.price


})


}

return (
<li className={classes.meal}>
<div>
<h2>{props.name}</h2>
<div className={classes.description}>{props.description}</div>
<div className={classes.price}>{price}</div>
</div>
<div><MealItemForm onAddToCart={addToCartHandler} id={props.id} /></div>
</li>




)
    
}
export default MealItem