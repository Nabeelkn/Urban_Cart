
import React, { useContext } from 'react';
import { BsCartCheckFill } from 'react-icons/bs'
import { IoIosCloseCircle } from "react-icons/io";
import { ProductContext } from '../Context/productContext';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';


const Modal = ({ closeModal, product }) => {

    const { selectedProduct, addToCart} = useContext(ProductContext);

    const handleAddToCart = () => {
        if (selectedProduct) {
            addToCart(selectedProduct);
            console.log("Product added to cart", selectedProduct);
            closeModal();
        }
    }
    if (!product) return null;
    if (!selectedProduct) return null;

    return (
        <div className="modal">
            <div className="modal-content text-center">
                <span className="close" onClick={closeModal}> <IoIosCloseCircle className='text-2xl text-red-900' /></span>
                <h2 className='font-bold mb-5'>{product.title}</h2>
                <img src={product.image} alt={product.title} className='h-[250px] px-[250px]' />
                <p className='mt-4 mb-3 border p-3 shadow-xl'>{product.description}</p>
                <div className='flex justify-between'>
                    <p className='font-bold mb-1 mt-3  bg-[#fceee0] p-3 rounded-lg'>Price: ${product.price}</p>
                    <button
                        className='text-black rounded-3xl w-[50px] border-b-2 bg-[#fceee0] shadow-md text-[13px] px-3 h-[50px]'
                        onClick={handleAddToCart}
                    >
                        <BsCartCheckFill className='text-2xl' />
                    </button>

                   
                </div>
            </div>
        </div>
    );
};

export default Modal;
