import React from 'react'
import CartItem from './cartItem'
import { useSelector } from 'react-redux'


const CartContainer = () => {
    const {cartItems, amount, total} = useSelector(store => store.cart)


    if(amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map(cart => {
                    return <CartItem key={cart.id} {...cart}/>
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className='btn clear-btn'>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
