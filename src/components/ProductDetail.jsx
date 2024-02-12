import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <div className="container my-5 py-3 ">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product" style={{width:"600px", height:"450px"}}>


<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner" style={{height:"500px"}}>
    <div class="carousel-item active" style={{height:"500px",width:"600px"}}>
      <img src={`${product.images[0]}`} class="d-block w-100" alt="not found" style={{height:"435px",width:"576px"}}/>
    </div>
    <div class="carousel-item" style={{width:"600px"}}>
      <img src={`${product.images[1]}`} class="d-block w-100" alt="not found" style={{height:"435px",width:"576px"}}/>
    </div>
    <div class="carousel-item" style={{width:"600px"}}>
      <img src={`${product.images[2]}`} class="d-block w-100" alt="not found" style={{height:"435px",width:"576px"}}/>
    </div>
    <div class="carousel-item" style={{width:"600px"}}>
      <img src={`${product.images[3]}`} class="d-block w-100" alt="not found" style={{height:"435px",width:"576px"}}/>
    </div>
    <div class="carousel-item" style={{width:"600px"}}>
      <img src={`${product.images[4]}`} class="d-block w-100" alt="not found" style={{height:"435px",width:"576px"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product.title}</h1>
                    <hr />
                    <h2 className="my-4">${product.price}</h2>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-primary my-5">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
