import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { GetDataService } from '../services/get-data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private getData: GetDataService, private dataStorage: DataStorageService,
    private router: Router) { }

  getParamValue: any;
  getProductDetails: any;
  storeCartData: any = [];
  inCart: boolean = false;
  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');

    const getVal = this.dataStorage.getCartData()

    this.storeCartData = getVal ? getVal : [];

    this.getData.productData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.getProductDetails = ele;
      }
    });

    this.storeCartData.filter((ele: any) => {
      if (ele.pdId == this.getParamValue) {
        this.inCart = true;
      }
    });


  }

  addCart(data: any) {
    data['plusMinusCounter'] = 1;
    this.storeCartData.push(data);
    this.dataStorage.storeCartData(this.storeCartData);
    this.router.navigate(['/cart']);
  }

}
