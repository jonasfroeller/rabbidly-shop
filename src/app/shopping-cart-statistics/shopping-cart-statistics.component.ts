import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-shopping-cart-statistics',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './shopping-cart-statistics.component.html',
  styleUrl: './shopping-cart-statistics.component.scss'
})
export class ShoppingCartStatisticsComponent {
  @Input() statistics!: { [id: string]: number; [id: number]: number };

  parsedStatisticsString() {
    return JSON.stringify(this.parsedStatistics());
  }

  parsedStatistics() {
    let parsedStatistics: { [key: string]: number } = {};

    for (const key in this.statistics) {
      if (this.statistics.hasOwnProperty(key)) {
        const value = this.statistics[key];
        const match = key.match(/\d+$/);
        if (match) {
          const extractedNumber = parseInt(match[0], 10);
          parsedStatistics[extractedNumber.toString()] = value;
        }
      }
    }

    return parsedStatistics;
  }
}
