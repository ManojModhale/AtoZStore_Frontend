import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private router:Router){

  }
  getProducts(category:any){
    // alert(category)
    this.router.navigate(['products', category]);
  }
}