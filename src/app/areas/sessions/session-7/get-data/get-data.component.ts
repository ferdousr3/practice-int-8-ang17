import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { IProduct } from './productInterface';

@Component({
  selector: 'app-get-data',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './get-data.component.html',
  styleUrl: './get-data.component.css',
})
export class GetDataComponent {
  allProducts: IProduct[] = [];
  isLoading: boolean = false;
  constructor(private http: HttpClient) {}
  url: string =
    'https://aninter8-bd319-default-rtdb.firebaseio.com/product.json';
  getProduct() {
    this.isLoading = true;
    this.http
      .get<{ [key: string]: IProduct }>(this.url)
      //   .pipe(
      //     map((res) => {
      //       const products = [];
      //       for (const key in res) {
      //         if (res.hasOwnProperty(key)) {
      //           products.push({ ...res[key], id: key });
      //         }
      //       }
      //       return products;
      //     }),
      //     catchError((err) => {
      //       return throwError(() => {
      //         console.log(err.error);
      //         return err.status;
      //       });
      //     })
      //   )
      //   .subscribe((products) => {
      //     this.allProducts = products;
      //     this.isLoading = !this.isLoading;
      //   });
    
      .pipe(
        map((res) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.allProducts = res;
          this.isLoading = !this.isLoading;
        },
        error: (res) => {
          this.isLoading = !this.isLoading;
          console.log(res.error);
        },
      });
  }
}
