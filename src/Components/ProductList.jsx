import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
const retriveProducts =async() =>{
    const response =await axios.get('http://localhost:3000/products');
    return response.data;
}
const ProductList = () => {
    const {data:products,error,isLoading}=useQuery({
        //must be an array
        queryKey:['products'],
        queryFn:retriveProducts
    });
    if(isLoading){
        return<>
        <p>fatching Products</p>
        </>
    }
    if(error){
        return <>
        <p>{error.message}</p>
        </>
    }
  return (
    <div className='flex flex-col justify-center items-center w-3/5'>
        <h2 className='text-3xl my-2'>Product List</h2>
        <ul>
            {
                products && products.map(product) =>{
                    <li key={product.id}>
                        <img
                        src={product.thumbnail}
                        alt={product.titole}
                       
                        />
                         <p>{product.title}</p>

                         
                    </li>
                }
            }
        </ul>
        

    </div>
  )
}

export default ProductList