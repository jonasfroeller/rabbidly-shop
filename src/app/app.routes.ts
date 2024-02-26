import {Routes} from '@angular/router';
import {ShopItemDetailComponent} from "./shop-item-detail/shop-item-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'detail/:product_number',
    component: ShopItemDetailComponent,
    title: 'Product Details'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found'
  }
];
