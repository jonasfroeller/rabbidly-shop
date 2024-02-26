import {Component, inject, Input} from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-shop-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent {
  router: Router = inject(Router);

  @Input() id: string | null = null;
  number: number | null = null;
  @Input() name: string | null = null;
  @Input() description: string | null = null;
  @Input() price: number | null = null;
  @Input() currency: string | null = null;
  @Input() pictureUrl: string | null = null;
  protected readonly Math = Math;

  ngOnChanges() {
    if (this.id) {
      const parts = this.id.split("/");
      const lastPart = parts[parts.length - 1].trim();
      this.number = parseInt(lastPart);
    }
  }

  onAddToCart() {
    void this.router.navigate(['/']);
  }
}
