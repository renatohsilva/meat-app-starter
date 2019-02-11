import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();


  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(cartItem: CartItem) {
    this.increaseQty.emit(cartItem);
  }

  emitDecreaseQty(cartItem: CartItem) {
    this.decreaseQty.emit(cartItem);
  }

  emitRemove(cartItem: CartItem) {
    this.remove.emit(cartItem);
  }

  isItemsEmpty(): boolean {
    if (this.items && this.items.length > 0) {
      return true;
    }
    return false;
  }
}
