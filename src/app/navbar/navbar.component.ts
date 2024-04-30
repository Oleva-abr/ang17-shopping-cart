import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) { }



  @Input() cartCount: number = 0;

  ngOnInit(): void {
    const getVal = this.dataStorage.getCartData();
    this.cartCount = getVal ? getVal.length : 0;
  }
}
