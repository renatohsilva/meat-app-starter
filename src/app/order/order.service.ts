import { Injectable } from '@angular/core';
import { ShoopingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MEAT_API } from 'app/app.api';
import { ErrorHandler } from 'app/app.error-handler';

@Injectable()
export class OrderService {
    constructor(private cartService: ShoopingCartService, private http: Http) { }

    itemsValue(): number {
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

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    clear() {
        this.cartService.clear();
    }

}
