import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private getData: GetDataService) { }

  getProductDetail: any;

  ngOnInit(): void {
    this.getData.productData.filter((el: any) => {
      if (el.pdId == this.getProductDetail) {
        this.getProductDetail = el
      }
    })
  }

}
