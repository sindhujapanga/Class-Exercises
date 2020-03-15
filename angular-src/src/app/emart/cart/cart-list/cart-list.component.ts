import { Component, OnInit } from '@angular/core';
import { EmartService } from 'src/app/emart.service';
import { Router } from '@angular/router';
import { Item } from '../../Item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Item[];
  constructor(protected emartService: EmartService,protected router: Router) { }

  ngOnInit(): void {
    
    this.cartItems = this.emartService.getAllCart();
  }
  deleteCartItem(itemId: number){
    this.emartService.deleteCartItem(itemId);
    this.cartItems = this.emartService.getAllCart();

}
}
