import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent {
  @Input() name : string | null = null;
  @Input() description : string | null = null;
  @Input() price : number | null = null;
  @Input() currency : string | null = null;
  @Input() pictureUrl : string | null = null;
}
