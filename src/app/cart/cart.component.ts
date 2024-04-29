import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DataStorageService } from '../services/data-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  constructor(private dataStorage: DataStorageService) { }

  getCartData: any;
  storeCartArray: any = [];
  totalAmount: number = 0;
  totalCart: number = 0;


  ngOnInit(): void {
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart = this.getCartData.length;
    this.getCartData.filter((el: any) => {
      this.totalAmount = el.pdPrice + this.totalAmount
    })
  }


  removeCart(data: any) {
    this.totalAmount = 0;
    localStorage.removeItem("cart-data")
    this.storeCartArray = [];
    this.getCartData.filter((el: any) => {
      if (el.pdId != data.pdId) {
        this.storeCartArray.push(el);
        this.totalAmount = el.pdPrice + this.totalAmount;
      }
    })
    this.dataStorage.storeCartData(this.storeCartArray);
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart = this.getCartData.length;
  }
}
