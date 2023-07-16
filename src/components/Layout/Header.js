
import { Fragment } from "react"
import classes from './Header.module.css'
import mealImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header=(props)=>{

return(
<Fragment>

<header className={classes.header}>
<h2> React Meal</h2>
<HeaderCartButton onClick={props.onShowCart}/>
</header>


<div className={classes['main-image']}>
<img src={mealImage} alt='meanu check' />
</div>
</Fragment>


) 

}
export default Header