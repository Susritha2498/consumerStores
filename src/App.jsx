// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import reactLogo from "./assets/close.svg"
import HomePage from './components/Homepage'
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch,
// } from "react-router-dom";
import { ApolloClient, InMemoryCache , ApolloProvider} from '@apollo/client';
import ProductContext from "./context/ProductContext"
import  {useProductContext}  from "./context/useProductContext";
// import { RestLink } from 'apollo-link-rest';


function App() {
  const {storeName, setStoreName} = useProductContext(ProductContext)
  // const [url,setUrl] = useState("")
  // const [headers,setHeaders] = useState({})
  
    const shopifyDomain = 'graphql.myshopify.com'
    const shopifyToken = 'dd4d4dc146542ba7763305d71d1b3d38'
    const shopifyUrl = `https://${shopifyDomain}/api/2022-01/graphql.json`
    const shopifyAuth = {"X-Shopify-Storefront-Access-Token": shopifyToken}
     
    const magento_access_token = 'idbq85d4iksdwgfgy9fr0iqu0w08g17g'
    const magento_access_token_secret = 'nrix0lrxbsc66zvv4megumn6zvkfytvt'

const magentoUrl = "https://magento02.revovideo.io/graphql"
 const magentoAuth = {"Authorization" :`Bearer ${magento_access_token}`}
//  const restlink = new RestLink({uri:magentoUrl,headers:magentoAuth})


  const client = new ApolloClient({
    uri:shopifyUrl,
    headers : shopifyAuth,
    cache: new InMemoryCache(),
  });

  //   const client = new ApolloClient({
  //   uri:magentoUrl,
  //   headers : magentoAuth,
  //   cache: new InMemoryCache(),
  // });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HomePage/>
    </div>
    </ApolloProvider>
  )
}

export default App
