import { ChevronUp, ChevronDown } from '../icons';
import { removeItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';


const CartItem = ({id, title, price,img, amount}) => {
    const dispatch = useDispatch();
    
    const handleRemove = ()=> dispatch(removeItem(id));
    

  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className='remove-btn' onClick={handleRemove} >remove</button>
        </div>
        <div>
            <button className='amount-btn'>
                <ChevronUp />
            </button>
            <p className='amount'>{amount}</p>
            <button className='amount-btn'>
                <ChevronDown />
            </button>
        </div>

    </article>
  )
}

export default CartItem
