import {Injectable} from '@angular/core';
import {gql, request} from "graphql-request";

@Injectable({
  providedIn: 'root'
})
export class ShopItemServiceService {
  private API_URL = 'https://mock.shop/api';
  private API_QUERY_20 = gql`
    {
      products(first: 20) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              id
              url
            }
            variants(first: 3) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  constructor() {
  }

  async getAllProducts(): Promise<any> {
    try {
      return await request(this.API_URL, this.API_QUERY_20);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  async getProductByFullId(full_id: string): Promise<any> {
    return await request(this.API_URL, this.API_QUERY_1(full_id));
  }

  private API_QUERY_1 = (full_id: string) => {
    return gql`
    {
      product(id: "${full_id}") {
        id
        title
        description
        featuredImage {
          id
          url
        }
      }
    }
  `;
  };
}
