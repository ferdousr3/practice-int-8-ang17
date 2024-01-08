import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
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
  constructor(private http: HttpClient) {}
  url: string =
    'https://aninter8-bd319-default-rtdb.firebaseio.com/product.json';
  getProduct() {
    this.http
      .get<{ [key: string]: IProduct }>(this.url)
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
      .subscribe((products) => {
        this.allProducts = products;
      }),
      catchError((err) => {
        return throwError(() => {
          console.log(err);
          return err;
        });
      });
  }
}
