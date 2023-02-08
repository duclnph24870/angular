import { Component } from '@angular/core';
import { Product } from '../interfaces';
import products from '../store/products';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css']
})
export class Lab2Component {
  data: Product[] = products;
  filterValue: string = "";
  handleFilter () {    
    if (this.filterValue === 'all' || this.filterValue === '') {
      this.data = products
      return;
    };
    this.data = this.data.filter(item => {            
      return item.productName.toLocaleLowerCase().includes(this.filterValue.toLowerCase());
    });
  }
}
