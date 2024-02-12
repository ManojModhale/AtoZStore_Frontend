import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ProductdialogComponent } from '../productdialog/productdialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',

})
export class ProductsComponent {
  @Input() products:any=[

  ];




   pageSize = 6;
  currentPage = 1;
  user:any={};
  selectedSize: string | null = null;
  selectedColor!:String;










   baseurl="http://localhost:8081"
   constructor(private http:HttpClient,private router:Router,private route: ActivatedRoute,public dialog: MatDialog){

    for(let i of this.products){
      console.log(i.imageFile.filePath);

    }

   }


   get displayedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.products.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.scrollToTop();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
  }

   private scrollToTop(): void {
    // Using JavaScript to scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



  openDialog(product: any) {
    const dialogRef = this.dialog.open(ProductdialogComponent, {
      data: product
    });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // Handle any actions after the dialog is closed, if needed
  //     console.log('The dialog was closed');
  //   });
  }

}
