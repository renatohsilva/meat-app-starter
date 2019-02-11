import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoopingCartService {
    items: CartItem[] = [];

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem) {
        let index: number = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, valor) => prev + valor, 0);
    }

    increaseQty(cartItem: CartItem) {
        cartItem.quantity = cartItem.quantity + 1;
    }

    decreaseQty(cartItem: CartItem) {
        cartItem.quantity = cartItem.quantity - 1;
        if (cartItem.quantity === 0) {
            this.removeItem(cartItem);
        }
    }
}