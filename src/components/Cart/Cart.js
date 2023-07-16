
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart=props=>{

const cartItem=(
<ul className={classes['cart-items']}>
{[{id:'1',name:'uhi',amount:3,price:445}].map((item)=><li>{item.name}</li>)}
</ul>
)
    return (
<Modal onClose={props.onClose}>
{cartItem}
<div className={classes.total}>
    <span>Total amount</span>
    <span>65</span>
</div>
<div className={classes.actions}> 
    <button className={classes['button-alt']}> Order</button>
        <button className={classes.button} onClick={props.onClose}>Close</button>
    </div>
</Modal>



    )

}
export default Cart