import { Injectable } from '@angular/core';
import { ShoopingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoopingCartService) { }

    itemsValue():number{
        return this.cartService.total();
    }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(cartItem: CartItem) {
        this.cartService.increaseQty(cartItem);
    }

    decreaseQty(cartItem: CartItem) {
        this.cartService.decreaseQty(cartItem);
    }

    remove(cartItem: CartItem) {
        this.cartService.removeItem(cartItem);
    }
}
