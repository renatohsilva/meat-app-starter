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
            foundItem.quantity = foundItem.quantity + 1;
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
}