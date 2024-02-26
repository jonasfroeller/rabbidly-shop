import {Component, inject, Input} from '@angular/core';
import {ShopItemServiceService} from "../shop-item-service.service";
import {ActivatedRoute} from "@angular/router";
import {ShopItemComponent} from "../shop-item/shop-item.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-shop-item-detail',
  standalone: true,
  imports: [
    ShopItemComponent,
    NgIf
  ],
  templateUrl: './shop-item-detail.component.html',
  styleUrl: './shop-item-detail.component.scss'
})
export class ShopItemDetailComponent {
  private static base_id = "gid://shopify/Product/"
  route: ActivatedRoute = inject(ActivatedRoute);

  product: any;
  @Input() product_number: number | null = null;
  private shopItemService: ShopItemServiceService = inject(ShopItemServiceService)

  constructor() {
    this.product_number = Number(this.route.snapshot.params['product_number']);
  }

  async ngOnInit() {
    await this.fetchProduct();
  }

  async fetchProduct(): Promise<void> {
    try {
      const response = await this.shopItemService.getProductByFullId(
        [ShopItemDetailComponent.base_id, this.product_number]
          .join(""));
      this.product = response.product;

      console.log('Product:', this.product);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
