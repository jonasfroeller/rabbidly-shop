import {Component} from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";
import {ShopItemComponent} from "../shop-item/shop-item.component";
import {AddressFormComponent} from "../address-form/address-form.component";
import {NgForOf} from "@angular/common";
import {ShoppingCartStatisticsComponent} from "../shopping-cart-statistics/shopping-cart-statistics.component";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    ShopItemComponent,
    AddressFormComponent,
    NgForOf,
    ShoppingCartStatisticsComponent
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  // manual Injection: protected shoppingCartService: ShoppingCartService = Inject(ShoppingCartService); constructor() {}
  constructor(protected shoppingCartService: ShoppingCartService) {
  }

  onClear() {
    this.shoppingCartService.purgeCart();
  }

  onRemoveCartItem(cartItemId: string | number) {
    this.shoppingCartService.removeCartItem(cartItemId);
  }
}
