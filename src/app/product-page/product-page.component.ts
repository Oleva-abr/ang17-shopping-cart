import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GetDataService } from '../services/get-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {

  getParamValue: any;
  getProductData: any = [];
  filterProductData: any = [];
  getSubCategoryOption: any = [];
  constructor(private route: ActivatedRoute, private getData: GetDataService) { }

  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('name');

    this.getData.productData.filter((el: any) => {
      if (el.pdCategory == this.getParamValue) {
        this.getProductData.push(el);
        this.filterProductData.push(el);
      }
    });

    this.getData.subCategorisFilterData.filter((el: any) => {
      if (el.categories == this.getParamValue) {
        this.getSubCategoryOption.push(el);
      }
    });
  }

  filterSelect(data: any) {
    this.filterProductData = [];
    var getFilterValue: any = data.target.value;
    console.log(getFilterValue, 'getFilterValue');

    if (getFilterValue != 'all') {
      this.getData.productData.filter((el: any) => {
        if (el.pdSubCategory == getFilterValue) {
          this.filterProductData.push(el);
        }
      });
    } else {
      this.filterProductData = this.getProductData;
    }
  }
}
