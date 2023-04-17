import { useState } from "react";

import ProductContext from "./ProductContext";

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([])
  const [storeType, setStoreType] = useState("shopify")
  // const [storedata, setStoreData] = useState([])
  // const [shopifyDomain,setShopifyDomain] = useState('')
  // const[shopifyToken, setShopifyToken] = useState('');
  const ProductProviderValues = {
    products: products,
    setProducts: setProducts,
    product : product,
    setProduct : setProduct,
    storeType: "shopify",
    setStoreType:setStoreType
    // storedata : storedata,
    // setStoredata: setStoreData,
    // shopifyDomain: 'graphql.myshopify.com',
    // setShopifyDomain: setShopifyDomain,
    // shopifyToken:'dd4d4dc146542ba7763305d71d1b3d38',
    // setShopifyToken: setShopifyToken
  };
  return <ProductContext.Provider value={ProductProviderValues} >{props.children}</ProductContext.Provider>
};
export default ProductContextProvider;
