import { ChevronUp, ChevronDown } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


const CartItem = ({id, title, price,img, amount}) => {
    const dispatch = useDispatch();
    const remove = () => dispatch(removeItem(id));
    const increment = () => dispatch(increase(id));
    const decrement = () => dispatch(decrease(id));
    


  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className='remove-btn' onClick={remove} >remove</button>
        </div>
        <div>
            <button 
                className='amount-btn' 
                onClick={increment}>
                <ChevronUp />
            </button>
            <p className='amount'>{amount}</p>
            <button 
                className={`amount-btn ${amount < 1 ?  'under-zero' : ''}`} 
                onClick={decrement}>
                <ChevronDown />
            </button>
        </div>

    </article>
  )
}

export default CartItem
