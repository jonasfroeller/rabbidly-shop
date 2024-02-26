import {Component} from '@angular/core';
import {ShopItemsWrapperComponent} from "../shop-items-wrapper/shop-items-wrapper.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ShopItemsWrapperComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
