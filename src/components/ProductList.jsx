import {useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import axios from "axios";
import ProductContext from "../context/ProductContext";
import  {useProductContext}  from "../context/useProductContext";
import {MagentoProducts, ShopifyProducts} from "../utilities/productquery"
import Product from "./Product"
import "./ProductList.css"

const ProductList  = ()=>{
  const {products, setProducts, product, setProduct, storeType, setStoreType} = useProductContext(ProductContext)
  const [items, setItems] = useState();
  const [error,setError] = useState();

  const query = ""
  // const loading = true
  // const error = ""
  // const data = []
  // if (storeType == "shopify"){
    // const { loading, error, data } = useQuery(MagentoProducts);  
  // }else if (storeType =="magento"){
  //   const { loading, error, data } = useQuery(MagentoProducts);  
  // }


  // useEffect(() => {
  //   if (data) {
  //     const prods = data.products.edges
  //     setItems(prods);
  //     console.log("items is", items)
  //   }
  // }, []);

  //   if (loading) {return (<p>Loading...</p>)}
  //   if (error) {
  //     console.log(error)
  //     return (<p>Error </p>)}
  useEffect(() => {
    	

    const reqBody= {
      "skus": [
        "24-WB06",
        "240-LV06",
        "24-WG080"
      ]
    }
    const magentoUrl = "https://magento02.revovideo.io/rest/default/V1/categories"
    const magento_access_token = 'idbq85d4iksdwgfgy9fr0iqu0w08g17g'


    axios.post(magentoUrl, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${magento_access_token}`
      },
      reqBody
  })      
  .then((response) => {
      setItems(response.data)
      console.log("data is ",items)
  })
  .catch((error) => {
      setError(error)
      console.log(error)
  })
  }, []);

  if (error) {return <p>Error: {error.message}</p>;}
  if (!items) {return <p>No data</p>}

  return (
    <div>
      <h1>{items[0].sku}</h1>
      <p>{items[0].price}</p>
    </div>
  );
  }
//   return (
//     <div className="ProductsPanel">
//       {/* items?{items.map(item => {
//         return (
//           <div key={item.id}>
//             <h2>{item.title}</h2>
//             <p>Details:{item.description}</p>
//             <p>Price: {item.priceRange.minVariantPrice.amount} - {item.priceRange.maxVariantPrice.amount}</p>
//           </div>
//         );
//       })}:<p>No data found</p> */}

//         <p className="ProductsHeader">PRODUCTS</p>
//         {/* {data.products.edges.map((item) => {
//         return (
//           <div key={item.node.id}>
//             <Product item={item} />
//           </div>
//         );
//       })} */}
// {/* <ul>
//       {data.products.edges.map((product) => (
//         <li key={product.node.id}>
//           <img className="ProductImage" src={product.node.images.edges[0].node.originalSrc} alt={product.node.title}/>
//           <h3>{product.node.title}</h3>
//           <p>{product.node.handle}</p>
//         </li>
//       ))}
//     </ul> */}

//     <ul>
//       {data.products.items.map(product => (
//         <li key={product.id}>
//           {product.name} ({product.sku}): {product.price.regularPrice.value} {product.price.regularPrice.currency}
//         </li>
//       ))}
//     </ul>
//     </div>
//   );
//     }

export default ProductList;