import React, { useContext } from 'react'
import Header from '../Components/Header'
import { ProductContext } from '../Context/productContext';

function Cart() {
    const { cart } = useContext(ProductContext);
    const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
    return (
        <>
            <div className='homeBg h-screen'>
                <Header />
                <h2 className='text-5xl font-bold text-center'>Cart</h2>
                <div className='grid grid-cols-3 lg:grid p-5'>


                    {/* added cart items */}
                    <div className='col-span-1 w-[600px]'>

                        {cart.length === 0 ? (
                            <p className='font-bold text-4xl text-red-500   '>Your cart is empty.</p>
                        ) : (
                            <div>
                                {cart.map((item, index) => (
                                    <div key={index} className='cartItems flex gap-6 mb-4 h-[100px] border-2 rounded-lg drop-shadow-xl px-4 py-2'>

                                        <img src={item.image} className='h-[70px]' />
                                        <div className='flex-col mt-3 font-semibold text-md'>
                                            <p>{item.title}</p>
                                            <p> ${item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="col-span-1 "></div>

                    {/* pricing summary */}
                    <div className="col-span-1 h-[200px] text-center rounded-xl w-[400px] border-2 p-5">
                     <h3 className='font-semibold mb-3'>Total items : <span className='text-xl font-semibold'>  {cart.length}</span> </h3>  
                     <h3 className='font-semibold  mb-3'>Total price : <span className='text-xl font-semibold'>${totalPrice.toFixed(2)}</span> </h3>
                     <button className='btn border-2 p-3 rounded-md bg-green-600 '>Proceed to Pay</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart