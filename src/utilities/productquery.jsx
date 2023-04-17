import gql from "graphql-tag";

export const ShopifyProducts = gql`
    query {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 1) {
              edges {
                node {
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  `;
 
export const MagentoProducts = gql`
  query GetProducts {
  products {
      items {
      id
      name
      sku
      price {
          regularPrice {
          value
          currency
          }
      }
      }
  }
  }
  `;