import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Product = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);
    
    console.log(product);

    const renderProductCard = (products) => {
        console.log(products.images);
        return (
            <div className="card my-5 py-4" key={products.id} style={{width: "20rem"}}>
                <div className="vinod" style={{width: "18rem", overflow: "scroll", display:"flex", flexDirection: "row"}}>
                {products.images.map((x) => {return <img style={{width: "275px", height:"350px"}} src={`${x}`}  key={x[0]} className="card-img-top" alt={products.title}/>})}
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="lead">${products.price}</p>
                    <NavLink to={`/products/${products.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
        );
    };
    


    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Products</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {product.map(renderProductCard)}
                </div>
            </div>
        </div>
    );
};

export default Product;
