import { Component } from '@angular/core';
import { ShopItemComponent } from '../shop-item/shop-item.component';
import { ShopItemServiceService } from '../shop-item-service.service';

@Component({
  selector: 'app-shop-items-wrapper',
  standalone: true,
  imports: [ShopItemComponent],
  templateUrl: './shop-items-wrapper.component.html',
  styleUrl: './shop-items-wrapper.component.scss'
})
export class ShopItemsWrapperComponent {
  products: any;

  constructor(private shopItemService: ShopItemServiceService) {}

  async ngOnInit() {
    this.fetchProducts();
  }

  async fetchProducts(): Promise<void> {
    try {
      const response = await this.shopItemService.getProducts();
      this.products = response.products.edges.map((edge: any) => edge.node);

      console.log('Products:', this.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
