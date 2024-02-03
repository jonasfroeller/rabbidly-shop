import { Injectable } from '@angular/core';
import { request, gql } from "graphql-request";

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

  constructor() {}

  async getProducts(): Promise<any> {
    try {
      const response = await request(this.API_URL, this.API_QUERY_20);
      return response;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
