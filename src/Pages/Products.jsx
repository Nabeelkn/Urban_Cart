import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { fetchAllProducts } from '../Services/productService'
import Card from '@mui/material/Card';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Modal from '../Components/Modal';
import { ProductContext } from '../Context/productContext';
import { Alert, Snackbar } from '@mui/material';
import Footer from '../Components/Footer';

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { selectedProduct, setSelectedProduct , alertOpen, handleCloseAlert  } = useContext(ProductContext)

    //fetching products
    useEffect(() => {
        const getProducts = async () => {
            try {
                const productList = await fetchAllProducts();
                setProducts(productList)
                setLoading(false)
                console.log("Products fetched");
            } catch (error) {
                console.log("error in fetching products", error);
                setLoading(false)
            }
        };
        getProducts()
    }, [])

    //scrolling animation
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleProductClick = (product) => {
        console.log("product clicked:" ,product);
        
        setSelectedProduct(product);
    }

    if (loading) {
        return <p className='text-center font-bold '>Loading products...</p>;
    }

    // filter products by catgory
    const clothingProducts = products.filter(product => product.category == "men's clothing");
    const electronicsProducts = products.filter(product => product.category == "electronics");
    const jewellaryProducts = products.filter(product => product.category == "jewelery")
    return (
        <>
            <div className='homeBg mx-auto grid lg:grid columns-2 h-[100%]'>

                {/* Header */}
                <Header />

                <Snackbar
                        open={alertOpen}
                        autoHideDuration={3000}
                        onClose={handleCloseAlert}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert onClose={handleCloseAlert} severity="success">
                            Item added to cart!
                        </Alert>
                    </Snackbar>

                <div className='col-span-1'>

                </div>
                <h1 className='text-center font-bold text-5xl mt-10'> Our Products</h1>
                {/* clothing section */}
                <div className='col-span-1 mb-8 p-7'>
                    <h2 className='text-2xl font-semibold mb-4'>Clothing</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {clothingProducts.map((product) => (
                            <Card
                                sx={{ maxWidth: 345 }}
                                key={product.id}
                                className='p-10 drop-shadow-md'
                                data-aos="zoom-in"
                                onClick={() => handleProductClick(product)}
                            >
                                <img src={product.image} className='h-[200px] max-h-fit justify-center' />
                                <div className='p-4'>
                                    <h3 className='text-lg font-semibold'>{product.title}</h3>
                                    <p className='text-sm text-gray-600'>${product.price}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Jewelry Section */}
                <div className='col-span-1 mb-8 p-7'>
                    <h2 className='text-2xl font-semibold  mb-4'>Jewelry</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {jewellaryProducts.map((product) => (
                            <Card
                                sx={{ maxWidth: 345 }}
                                key={product.id}
                                className='p-10 drop-shadow-md'
                                data-aos="zoom-in"
                                onClick={() => handleProductClick(product)}
                            >
                                <img src={product.image} className='h-[200px] max-h-fit justify-center' />
                                <div className='p-4'>
                                    <h3 className='text-lg font-semibold'>{product.title}</h3>
                                    <p className='text-sm text-gray-600'>${product.price}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Electronics Section */}
                <div className='col-span-1 mb-8 p-7'>
                    <h2 className='text-2xl font-semibold mb-4'>Electronics</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {electronicsProducts.map((product) => (
                            <Card
                                sx={{ maxWidth: 345 }}
                                key={product.id}
                                className='p-10 drop-shadow-md'
                                data-aos="zoom-in"
                                onClick={() => handleProductClick(product)}
                            >
                                <img src={product.image} alt={product.title} className='h-[200px] max-h-fit justify-center' />
                                <div className='p-4'>
                                    <h3 className='text-lg font-semibold'>{product.title}</h3>
                                    <p className='text-sm text-gray-600'>${product.price}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <Footer/>
            </div>
            {selectedProduct && 
            <Modal
               closeModal={() => setSelectedProduct(null)} 
               product={selectedProduct}
               />}
        </>
    )
}

export default Products