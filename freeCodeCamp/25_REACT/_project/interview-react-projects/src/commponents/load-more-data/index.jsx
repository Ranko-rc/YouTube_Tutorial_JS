import "./styles.css";
import { useState, useEffect } from "react";    



export default function LoadMoreData() {

const [loading, setLoading] = useState(false);  
const [products, setProducts] = useState([]);
const [count, setCount] = useState(0);


async function fetchProducts() {
    try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20 }`);


        const result = await response.json();

        if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
        }

    } catch (error) {
        console.error(error);
        setLoading(false);


    } finally {
        setLoading(false);
    }
   }




useEffect(() => {
    fetchProducts();
}, [count]);

if (loading) {
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
}


    return (
        <div className="container">
            <div className="Main-text"><h1>Product List</h1></div>
            
           <div className="products-container">
            {products && products.length ?
                products.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))
                : null } 
           </div>
           <div className="buttom-container">
               <button onClick={() => { setCount(count + 1); fetchProducts(); }}>Load More</button>
           </div>
        </div>
        
           
    );
}