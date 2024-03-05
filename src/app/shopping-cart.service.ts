import {Injectable} from '@angular/core';
import {ShoppingItem} from "./shop-item";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: ShoppingItem[] = [];
  private cartStatistics: { [id: string | number]: number } = {};
  private storageKey = 'rabbidly:shopping-cart';

  constructor(protected localStorageService: LocalStorageService) {
    this.loadCartState();
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartStatistics() {
    return this.cartStatistics;
  }

  /**
   * Expects a cartItem object and returns the object if successful or null if not.
   * @param cartItem
   */
  addCartItem(cartItem: ShoppingItem): ShoppingItem | null | undefined {
    if (!cartItem.id) return undefined; // invalid input
    if (this.cartItems.containsId(cartItem.id)) {
      this.addItemToCartStatistics(cartItem.id);
      this.saveCartState();
      return null;
    }

    this.cartItems.push(cartItem);
    this.addItemToCartStatistics(cartItem.id, 1);
    this.saveCartState();
    return cartItem;
  }

  /**
   * Expects a cartItem id and returns the object if successful or null if not.
   * @param cartItemId
   */
  removeCartItem(cartItemId: string | number): ShoppingItem | null | undefined {
    if ((typeof cartItemId === "string" && cartItemId.length < 1) || typeof cartItemId === "number" && cartItemId < 0) return undefined;
    const cartItem = this.cartItems.getById<ShoppingItem>(cartItemId);

    if (!cartItem) {
      return null;
    }

    const amountLeft = this.removeItemFromCartStatistics(cartItemId);
    if (amountLeft <= 0) this.cartItems = this.cartItems.removeById<ShoppingItem>(cartItemId);
    this.saveCartState();
    return cartItem;
  }

  purgeCart() {
    this.cartItems = [];
    this.cartStatistics = {};
    this.localStorageService.removeItem(this.storageKey);
  }

  private addItemToCartStatistics(cartItemId: string | number, initial?: number) {
    if (initial) {
      this.cartStatistics[cartItemId] = initial;
    } else {
      if (this.cartStatistics[cartItemId]) {
        this.cartStatistics[cartItemId]++;
      } else {
        this.cartStatistics[cartItemId] = 1;
      }
    }
  }

  private removeItemFromCartStatistics(cartItemId: string | number) {
    if (this.cartStatistics[cartItemId]) {
      this.cartStatistics[cartItemId]--;
      if (this.cartStatistics[cartItemId] <= 0) {
        delete this.cartStatistics[cartItemId];
        return -1;
      }

      return this.cartStatistics[cartItemId];
    }

    return 0;
  }

  private saveCartState() {
    const cartState = {
      cartItems: this.cartItems,
      cartStatistics: this.cartStatistics
    };
    this.localStorageService.setItem(this.storageKey, JSON.stringify(cartState));
  }

  private loadCartState() {
    const savedCartState = this.localStorageService.getItem(this.storageKey);
    if (savedCartState) {
      const parsedCartState = JSON.parse(savedCartState);
      this.cartItems = parsedCartState.cartItems;
      this.cartStatistics = parsedCartState.cartStatistics;
    }
  }
}

// extending the Array Object, because why not :), I am writing js, I am a psychopath (:
declare global {
  interface Array<T> {
    containsId(id: string | number): boolean;

    getById<T>(id: string | number): T | undefined;

    removeById<T>(id: string | number): T[];
  }
}

Array.prototype.removeById = function <T>(id: string | number): T[] {
  return this.filter((element: { id: string | number }) => element.id !== id);
};

Array.prototype.getById = function <T>(id: string | number): T | undefined {
  return this.find((element: { id: string | number }) => element.id === id);
};

Array.prototype.containsId = function (id: string | number): boolean {
  return this.some((element: { id: string | number }) => element.id === id);
};
