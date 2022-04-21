import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Products.css';
const Products = () => {
         


    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const size = 5;

    useEffect(() => {
        fetch(`https://enigmatic-garden-34025.herokuapp.com/other?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
            });
    }, [page]);



       
         return (
                  <div id='shop'>
                  <div className="container my-5">
                  <h2 className="team-heading">Our Products</h2>
                  <div className="row">
                  {
                           products.map(product=> <Product
                                    key={product.key}
                                    product={product}
                                     ></Product>)
                  }
                  </div>

                  <div className="pagenation">

                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={number === page ? 'selated' : ''}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number}</button>)
                }

            </div>
                  </div>
                  </div>
         );
};

export default Products;